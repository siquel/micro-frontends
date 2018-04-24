const http = require('http');
const Tailor = require('node-tailor');
const tailor = new Tailor({
  templatesPath: __dirname + '/templates'
});
console.log(__dirname + '/templates');
const server = http.createServer(tailor.requestHandler);

const config = {
  port: process.env.PORT || 9000,
  port2: 9001
};

server.listen(config.port);
console.log(`Tailor server listening on port: ${config.port}`);

http
  .createServer((req, res) => {
      res.writeHead(200, {
          'Content-Type': 'text/html'
      });
      res.end('<div>Fragment 1</div>');
  })
  .listen(config.port2, () => console.log(`Fragment Server listening on port ${config.port2}`));
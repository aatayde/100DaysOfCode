const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Crypto!');
});

let crypto;
try {
  crypto = require('node:crypto');

} catch (err) {
  console.log('crypto support is disabled!');
}


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

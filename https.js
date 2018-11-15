var https = require('https');

https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hi');
  res.end();
}).listen(8080);
//http module can create an http server that listens to server ports and gives a response back to the client.

var http = require('http');

//create a server object:
http.createServer(function (req, res) 
{
  res.write('Hi'); 
  res.end(); //end the response
}).listen(8080); 
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.end("You are connected");
}).listen(1480, "127.0.0.1");




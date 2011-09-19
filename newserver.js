var net = require('net');

var server = net.createServer(function(response) {
	response.on('connect', function() {
		response.write('Hello I\'\m Dhruv');
		response.end();
	});
});
server.listen(1480, '127.0.0.1');
//console.log("server says what up");



var http = require ("http");
var client = http.createClient(1480, '127.0.0.1', true);
var request = client.request('GET', '/', {'host': '127.0.0.1'});

request.end();


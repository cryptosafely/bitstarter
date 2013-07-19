
var http = require('http');
var fs  = require('fs');
var buffer = new Buffer(20);
http.createServer(function(request,response){
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.end = fs.readFileSync('./index.html', "utf8");
}).listen(process.env.PORT);






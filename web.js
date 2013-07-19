var sys = require("sys"),
http = require("http");
var fs  = require("fs");
var buffer = new Buffer(20);
http.createServer(function(request,response){
	response.writeHeader(200, {"Content-Type": "text/plain"});
	buffer = fs.readFileSync('./index.html', "utf8").toString;
	response.write(buffer);
	response.end();
})






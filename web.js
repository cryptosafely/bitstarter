var sys = require("sys"),
http = require("http");
var fs  = require("fs");
var buffer = new Buffer(20);
http.createServer(function(request,response){
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.write(fs.readFileSync('./index.html', "utf8").toString);
	response.end();
})






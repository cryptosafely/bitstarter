var sys = require("sys"),
my_http = require("http");
var fs  = require("fs");
var buffer = new Buffer(20);
my_http.createServer(function(request,response){
	sys.puts("I got kicked");
	response.writeHeader(200, {"Content-Type": "text/plain"});
	fs.readFileSync('./index.html', "utf8").toString;
	response.end();
}).listen(8080);
sys.puts("Server Running on 8080");	






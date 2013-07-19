
var http = require('http');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});

var fs = require('fs');

var str = fs.readFileSync('index.html', "utf8", function(err, data) {
if (err) throw err;
var buffer = new Buffer(str);
res.write(str);
});

res.end();
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');



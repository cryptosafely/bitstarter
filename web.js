
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
})



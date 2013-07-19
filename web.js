var fs  = require("fs");

fs.readFileSync('./index.html', "utf8").toString().split('\n').forEach(function (line) { 
    console.log(line);

var buffer = new Buffer(20);

});




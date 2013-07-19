

var fs = require('fs');

var str = fs.readFileSync('index.html', "utf8");
var buffer = new Buffer(str) 
console.log(str);




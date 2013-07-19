var fs  = require('fs');

var data = new Buffer(fs.readFileSync('index.html'));

  console.log(data.toString('utf-8'));


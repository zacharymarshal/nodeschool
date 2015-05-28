'use strict';

var fs = require('fs');
var filepath = process.argv[2];

fs.readFile(filepath, 'utf-8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data.split('\n').length - 1);
});

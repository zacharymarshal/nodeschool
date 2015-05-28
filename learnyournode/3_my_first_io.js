'use strict';

var fs = require('fs');
var filepath = process.argv[2];

var contents = fs.readFileSync(filepath).toString();

console.log(contents.split('\n').length - 1);

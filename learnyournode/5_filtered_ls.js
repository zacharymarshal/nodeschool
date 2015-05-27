'use strict';

var fs = require('fs');
var path = require('path');
var filepath = process.argv[2];
var extFilter = process.argv[3];

fs.readdir(filepath, function(err, list) {
  if (err) {
    return;
  }

  list.filter(function(file) {
    return path.extname(file) === '.' + extFilter;
  }).map(function(file) {
    console.log(file);
  });
});

// Their solution
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

'use strict';

var ls = require('./ls');

var dirPath = process.argv[2];
var extFilter = process.argv[3];

ls(dirPath, extFilter, function(err, files) {
  if (err) {
    return console.log('Oh noes! ' + err);
  }

  files.map(function (file) {
    console.log(file);
  });
});

// Their solution
// 
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
// 
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
// 
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

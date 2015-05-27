'use strict';

var fs = require('fs');
var path = require('path');

var ls = function(dirPath, extFilter, callback) {
  fs.readdir(dirPath, function(err, list) {
    if (err) {
      return callback(err);
    }

    var files = list.filter(function(file) {
      return path.extname(file) === '.' + extFilter;
    });

    return callback(null, files);
  });
};

module.exports = ls;

// Their Solution
// 
// var fs = require('fs')
// var path = require('path')
// 
// module.exports = function (dir, filterStr, callback) {
// 
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
// 
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
// 
//     callback(null, list)
//   })
// }

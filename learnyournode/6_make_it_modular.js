'use strict';

var ls = require('./ls');

var dirPath = process.argv[2];
var extFilter = process.argv[3];

ls(dirPath, extFilter, function(err, files) {
  if (err) {
    return console.error('Oh noes!', err);
  }

  files.map(function(file) {
    console.log(file);
  });
});

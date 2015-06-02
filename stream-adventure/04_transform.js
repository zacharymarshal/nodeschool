'use strict';

var map = require('through2-map');

var uppercase = map(
  {
    wantStrings: true
  },
  function(str) {
    return str.toUpperCase();
  }
);

process.stdin.pipe(uppercase).pipe(process.stdout);

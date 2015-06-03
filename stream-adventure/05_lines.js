'use strict';

var split = require('split');
var through2 = require('through2');

var i = 1;

process.stdin
  .pipe(split())
  .pipe(through2(function(line, _, next) {
    if (++i % 2) {
      this.push(line.toString().toUpperCase() + '\n');
    } else {
      this.push(line.toString().toLowerCase() + '\n');
    }
    next();
  }))
  .pipe(process.stdout);

'use strict';

var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var uppercase = map(
  {
    wantStrings: true
  },
  function(str) {
    return str.toUpperCase();
  }
);

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  req.pipe(uppercase).pipe(res);
});
server.listen(Number(port));

// Their Solution
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))

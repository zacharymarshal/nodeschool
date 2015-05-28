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
  if (req.method !== 'POST') {
    return res.end('Send me a POST');
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});

  req.pipe(uppercase).pipe(res);
});
server.listen(Number(port));

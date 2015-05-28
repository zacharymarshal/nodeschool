'use strict';

var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var fileToServe = process.argv[3];

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  fs.createReadStream(fileToServe).pipe(res);
});
server.listen(Number(port));

'use strict';

var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var urlInfo = url.parse(req.url, true);
  var body;

  var date = new Date(urlInfo.query.iso);

  if (urlInfo.pathname === '/api/parsetime') {
    body = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (urlInfo.pathname === '/api/unixtime') {
    body = {
      unixtime: date.getTime()
    };
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(body));
});
server.listen(Number(port));

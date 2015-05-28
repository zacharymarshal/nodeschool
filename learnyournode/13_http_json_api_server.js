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

// Their Solution
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))

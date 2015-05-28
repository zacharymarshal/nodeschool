'use strict';

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function(socket) {
  socket.end(strftime('%F %H:%M%n'));
});
server.listen(port);

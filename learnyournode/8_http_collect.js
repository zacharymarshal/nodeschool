'use strict';

var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(res) {
  res.pipe(
    bl(function(err, data) {
      if (err) {
        return console.error('Error:', err);
      }
      console.log(data.length);
      console.log(data.toString());
    })
  );
});

// Their Solution
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//  response.pipe(bl(function (err, data) {
//    if (err)
//      return console.error(err)
//    data = data.toString()
//    console.log(data.length)
//    console.log(data)
//  }))
// })

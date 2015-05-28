'use strict';

var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);

var datas = [];

urls.map(function(url, index) {
  http.get(url, function(res) {
    res.pipe(
      bl(function(err, data) {
        if (err) {
          return console.error('Error:', err);
        }
        datas.push({
          data: data.toString(),
          url: url,
          index: index
        });

        if (datas.length === urls.length) {
          datas.sort(
            function(a, b) {
              return a.index > b.index;
            }
          ).map(
            function(data) {
              console.log(data.data);
            }
          );
        }
      })
    );
  });
});

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

// Their solution
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

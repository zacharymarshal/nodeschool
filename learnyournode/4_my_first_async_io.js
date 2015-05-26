var fs = require('fs');
var filepath = process.argv[2];

fs.readFile(filepath, function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});

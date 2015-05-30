'use strict';

function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) {
    return;
  }

  var id = setTimeout(operation, 100);

  setTimeout(function() {
    clearTimeout(id);
  }, 99);

  return repeat(operation, --num);
}

module.exports = repeat;

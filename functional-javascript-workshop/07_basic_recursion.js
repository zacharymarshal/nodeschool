'use strict';

function reduce(arr, fn, initial) {
  var r = function(index, val) {
    if (index > arr.length - 1) {
      return val;
    }

    return r(index + 1, fn(val, arr[index], index, arr));
  };

  return r(0, initial);
}

module.exports = reduce;

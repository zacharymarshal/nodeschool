'use strict';

module.exports = function(arr, fn, thisArg) {
  return arr.reduce(function(newArr, item, index, arr) {
    newArr.push(fn.call(thisArg, item, index, arr));

    return newArr;
  }, []);
};

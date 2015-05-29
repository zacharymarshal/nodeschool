'use strict';

function duckCount() {
  return [].reduce.call(arguments, function(numOfDucks, arg) {
    if (!Object.prototype.hasOwnProperty.call(arg, 'quack')) {
      return numOfDucks;
    }

    return ++numOfDucks;
  }, 0);
}

module.exports = duckCount;

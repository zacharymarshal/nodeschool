'use strict';

function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  var _repeat = function myself(operation, num) {
    if (num <= 0) {
      return;
    }
    operation();

    return function() {
      myself(operation, --num);
    };
  };

  return _repeat(operation, --num);
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  var result = fn();

  while (result instanceof Function) {
    result = result();
  }

  return result;
}

module.exports = function(operation, num) {
  return trampoline(function() {
    repeat(operation, num);
  });
};

'use strict';

function Spy(target, method) {
  var spy = {
    count: 0
  };
  var originalFn = target[method];
  target[method] = function() {
    ++spy.count;

    return originalFn.apply(target, Array.prototype.slice.call(arguments));
  };

  return spy;
}

module.exports = Spy;

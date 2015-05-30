'use strict';

function Spy(target, method) {
  var spy = {
    count: 0
  };
  var originalFn = target[method];
  target[method] = function() {
    ++spy.count;

    return originalFn.apply(target, arguments);
  };

  return spy;
}

module.exports = Spy;

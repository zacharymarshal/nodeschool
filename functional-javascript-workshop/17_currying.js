'use strict';

function curryN(fn, n) {
  n = n || fn.length;

  return function curry() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length === n) {
      return fn.apply(this, args);
    }

    return curryN(fn.bind.apply(fn, [this].concat(args)), n - args.length);
  };
}

function add3(a, b, c) {
  return a + b + c;
}

console.log(curryN(add3)(1)(2)(3) === 6);
console.log(curryN(add3)(1, 2)(3) === 6);
console.log(curryN(add3)(1, 2, 3) === 6);

module.exports = curryN;

'use strict';

// My Solution
console.log(
  process.argv.slice(2).reduce(
    function(previousValue, currentValue) {
      return Number(previousValue) + Number(currentValue);
    },
    0
  )
);

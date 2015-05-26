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

// Their Solution
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)

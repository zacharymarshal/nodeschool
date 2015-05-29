'use strict';

function repeat(operation, num) {
  if (num < 1) {
    return;
  }

  operation();

  return repeat(operation, --num);
}

module.exports = repeat;

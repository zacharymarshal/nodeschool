'use strict';

function countWords(inputWords) {
  return inputWords.reduce(function(prev, curr) {
    if (curr in prev) {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }

    return prev;
  }, {});
}

module.exports = countWords;

'use strict';

function countWords(inputWords) {
  return inputWords.reduce(function(wordCounts, word) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }

    return wordCounts;
  }, {});
}

module.exports = countWords;

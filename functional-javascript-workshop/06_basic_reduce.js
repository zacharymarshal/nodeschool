'use strict';

function countWords(inputWords) {
  return inputWords.reduce(function(wordCounts, word) {
    wordCounts[word] = ++wordCounts[word] || 1;

    return wordCounts;
  }, {});
}

module.exports = countWords;

'use strict';

function getShortMessages(messages) {
  return messages.map(function(msg) {
    return msg.message;
  }).filter(function(input) {
    return input.length < 50;
  });
}

module.exports = getShortMessages;

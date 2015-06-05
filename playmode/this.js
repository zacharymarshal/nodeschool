'use strict';

function delay(cb, seconds) {
  var hello = 'Hello';
  this.world = 'World';
  setTimeout(cb.bind(this, hello), seconds * 1000);
}

var test = {
  delay: delay
};

test.delay(function(hello) {
  console.log(hello, this.world);
}, 2);

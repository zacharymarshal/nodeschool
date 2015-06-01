'use strict';

function foo() {
  var bar;
  quux = false;
  function zip() {
    var quux = true;
    bar = true;
  }

  return zip;
}

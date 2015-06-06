'use strict';

var test = {
  data: {},
  get name() {
    return this.data.name;
  },

  set name(name) {
    this.data.name = name + ' oh what';
  },

  sayHello: function() {
    return console.log('Hello', this.name);
  }
};

test.name = 'zulu';
test.sayHello();
console.log('name' in test);

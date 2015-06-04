My explanation of `Function.prototype.call.bind(Array.prototype.slice)`

Some pseudo code as to how I think `bind` and `call` work.  `this` is normally an object context, but within the `call` function, `this` is used as a function.

```js
function call() {
  return this();
}

function bind(fn, obj) {
  return function() {
    fn.apply(obj, arguments);
  }
}
```

So doing `Function.prototype.call.bind(Array.prototype.slice)` is similar to doing `Function.call.call(Array.prototype.slice, [1, 2, 3], 2));`

Good stuff.

# Launch School Exercises: JS120 - Object Oriented JavaScript

## Function Context: The Franchise

<https://launchschool.com/exercises/904ed11e>

The method `franchise.allMovies` is supposed to return the following array:

```js
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]
```

Explain why this method will not return the desired object? Try fixing this
problem by taking advantage of JavaScript lexical scoping rules.

```js
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};
```

### Solution

Within `franchise.allMovies()`, `map` invokes its anonymous function callback in
the global execution context. Therefore, in the callback, `this` is bound to the
global object, not the `franchise` object like you would expect.

The global `name` property is not defined, so `this.name` evaluates to
`undefined`, and `allMovies()` returns the 3 element array:

```js
[ "undefined 1", "undefined 2", "undefined 3" ]
```

One way to solve this problem is by defining a variable within `allMovies()`
that will be accessible inside the `map` callback:

```diff
  let franchise = {
    name: 'How to Train Your Dragon',
    allMovies: function() {
+     let self = this;
      return [1, 2, 3].map(function(number) {
-       return this.name + ' ' + number;
+       return self.name + ' ' + number;
      });
    },
  };
```

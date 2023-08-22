# Launch School Exercises: JS120 - Object Oriented JavaScript

## Function Context: The Franchise - Solution 2

<https://launchschool.com/exercises/ff64a191>

In the previous exercise, we had a situation where an anonymous method passed to
`map` had an undesirable execution context. We solved the problem by taking
advantage of lexical scoping and introducing a new variable `self`. Solve the
same problem again by passing a hard-bound anonymous function to `map`.

### The original problem, repeated

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

Another way to solve this problem is by passing a pre-bound function to `map`:

```diff
  let franchise = {
    name: 'How to Train Your Dragon',
    allMovies: function() {
      return [1, 2, 3].map(function(number) {
        return this.name + ' ' + number;
-     });
+     }.bind(this));
    },
  };
```

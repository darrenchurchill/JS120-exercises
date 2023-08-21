# Launch School Exercises: JS120 - Object Oriented JavaScript

## Objects: Buggy Code 1

<https://launchschool.com/exercises/9c54eec6>

The code below is expected to output the following when run:

```js
> let helloVictor = createGreeter('Victor');
> helloVictor.greet('morning');
= Good Morning Victor
```

```js
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}
```

However, it instead results in an error. What is the problem with the code? Why
isn't is producing the expected results?

### Solution

The code above invokes greet `greet()` as a method of the `helloVictor` object.
However, as `greet()` is defined within the object `createGreeter()` returns, it
references `morning`, `afternoon`, and `evening` variables, none of which are
not defined in that context. As a result, a `ReferenceError` is thrown from
line 11, where the variable `morning` is referenced.

To achieve the desired result, `morning`, `afternoon`, and `evening` should be
prepended with `this.` so that when `greet()` is invoked, those reference the
`morning`, `afternoon`, and `evening` properties of the `helloVictor` object
bound to `this`.

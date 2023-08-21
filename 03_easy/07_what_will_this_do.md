# Launch School Exercises: JS120 - Object Oriented JavaScript

## Easy: What Will This Do?

<https://launchschool.com/exercises/b6dd0e20>

What will the following code log?

```js
class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());
```

### Solution

In the `Something` class defined above, there are two `dupData()` methods
defined. One is a `static` method, a property of the constructor function. The
other is an instance method, a property of the constructor prototype object.

On line 16, `Something.dupData()` invokes the `static` method, logging
`"ByeBye"` to the console. On line 17, `thing.dupData()` invokes `thing`'s
`dupData()` method, which logs the value `thing.data + thing.data`, or
`"HelloHello"` to the console.

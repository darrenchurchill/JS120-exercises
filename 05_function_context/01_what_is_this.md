# Launch School Exercises: JS120 - Object Oriented JavaScript

## Function Context: What is This?

<https://launchschool.com/exercises/a94dfdc1>

Read the following code carefully. What do you think is logged on line 7? Try
to answer the question before you run the code.

```js
let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
```

### Solution

On line 7, `person.fullName` is evaluated in the global execution context, so
`this` is bound to the global object. The global object doesn't have a
`firstName` or `lastName` property, so `person.fullName` evaluates to
`undefined`. `undefined` is logged to the console.

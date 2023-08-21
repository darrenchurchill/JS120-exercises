/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Easy
 *
 * Fake Cat
 *
 * https://launchschool.com/exercises/fa425d55
 */

class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

// By using Object.create(), fakeCat is an object indistinguishable from a Cat
// instance. Just like a an object created with the constructor, this object
// inherits from Cat.prototype. However, the constructor function is never
// invoked, so fakeCat's name property is undefined.
let fakeCat = Object.create(Cat.prototype);

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.

/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * OO Basics: Inheritance and Mixins
 *
 * Walk the Cat
 *
 * https://launchschool.com/exercises/9e05ae71
 */

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

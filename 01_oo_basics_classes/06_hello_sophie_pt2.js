/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * OO Basics: Classes
 *
 * Hello, Sophie! (part 2)
 *
 * https://launchschool.com/exercises/6b25a3e3
 */

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
kitty.greet();

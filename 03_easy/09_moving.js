/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Easy
 *
 * Moving
 *
 * https://launchschool.com/exercises/6d2071cb
 */

const walker = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}
Object.assign(Person.prototype, walker);

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}
Object.assign(Cat.prototype, walker);

class Cheetah extends Cat {
  gait() {
    return "runs";
  }
}

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

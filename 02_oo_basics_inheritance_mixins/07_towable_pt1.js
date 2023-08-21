/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * OO Basics: Inheritance and Mixins
 *
 * Towable (part 1)
 *
 * https://launchschool.com/exercises/5f6126cd
 */

const towable = {
  tow() {
    console.log("I can tow a trailer!");
  }
};

class Truck {}
Object.assign(Truck.prototype, towable);

class Car {}

let truck = new Truck();
truck.tow();

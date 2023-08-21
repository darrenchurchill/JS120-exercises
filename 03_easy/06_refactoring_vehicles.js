/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Easy
 *
 * Refactoring Vehicles
 *
 * https://launchschool.com/exercises/25bb8847
 */

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 4;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Motorcycle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 2;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Truck {
  constructor(make, model, payload) {
    this.make = make;
    this.model = model;
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

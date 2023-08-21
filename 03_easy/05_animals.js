/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Easy
 *
 * Animals
 *
 * https://launchschool.com/exercises/cf45546d
 */

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + " Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, owner) {
    super(name, age, 4, "dog", status);
    this.owner = owner;
  }

  greetOwner() {
    return `Hello ${this.owner}! Woof, woof!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

let dog = new Dog("Olaf", 3, "sad", "Roy");
console.log(dog.introduce());
console.log(dog.greetOwner());

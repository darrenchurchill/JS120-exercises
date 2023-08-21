/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Easy
 *
 * Shouter
 *
 * Rewrite the two objects below to use the `class` keyword, instead of direct
 * prototype manipulation.
 *
 * https://launchschool.com/exercises/10d9143d
 */

function Person() {
}
Person.prototype.greeting = function(text) {
  console.log(text);
};

function Shouter() {
  Person.call(this);
}
Shouter.prototype = Object.create(Person.prototype)
Shouter.prototype.greeting = function(text) {
  Person.prototype.greeting.call(this, text.toUpperCase());
};

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

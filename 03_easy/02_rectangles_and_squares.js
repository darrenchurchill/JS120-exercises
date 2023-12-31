/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Easy
 *
 * Rectangles and Squares
 *
 * https://launchschool.com/exercises/97b85bc0
 */

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

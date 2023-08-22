/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Object Creation Patterns
 *
 * Ancestors
 *
 * https://launchschool.com/exercises/7f3cd322
 */

// name property added to make objects easier to identify
let foo = {
  name: 'foo',
  ancestors() {
    let proto = Object.getPrototypeOf(this);
    if (proto === Object.prototype) return ["Object.prototype"];
    return [proto.name].concat(proto.ancestors());
  }
};

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

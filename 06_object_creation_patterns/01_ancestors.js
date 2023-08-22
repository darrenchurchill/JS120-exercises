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
    let result = [];
    let proto = Object.getPrototypeOf(this);

    while (proto !== null) {
      if (proto === Object.prototype) result.push("Object.prototype");
      else result.push(proto.name);
      proto = Object.getPrototypeOf(proto);
    }

    console.log(result);
  }
};

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']

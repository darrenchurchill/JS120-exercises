# Launch School Exercises: JS120 - Object Oriented JavaScript

## Objects: Buggy Code 2

<https://launchschool.com/exercises/9b032102>

A grocery store uses a JavaScript function to calculate discounts on various
items. They are testing out various percentage discounts but are getting
unexpected results. Go over the code, and identify the reason why they aren't
getting the expected discounted prices from the function. Then, modify the code
so that it produces the correct results.

```js
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    this.price -= discount;

    return this.price;
  },
};
```

```js
> item.discount(20)   // should return 40
= 40
> item.discount(50)   // should return 25
= 20
> item.discount(25)   // should return 37.5
= 15
```

### Solution

Each invocation of `item`'s `discount()` method modifies the object's `price`
property. The `discount()` method's math works correctly, but it's beginning
with a different value of `item.price` for each of the three invocations above.

One solution would be to modify `discount()` to return the discounted price,
without modifying the object's `price` property:

```diff
  let item = {
    name: 'Foo',
    description: 'Fusce consequat dui est, semper.',
    price: 50,
    quantity: 100,
    discount: function(percent) {
      let discount = this.price * percent / 100;
-     this.price -= discount;

-     return this.price;
+     return this.price - discount;
    },
  };
```

// Imagine, we have an arbitrary object obj, created by a constructor function
// – we don’t know which one, but we’d like to create a new object using it.

// Can we do it like that?
// let obj2 = new obj.constructor();

// Give an example of a constructor function for obj which lets such code work
// right. And an example that makes it work wrong.

// A: Calling obj's constructor will work if the constructor's prototype hasn't
// been changed. A constructor's default prototype points to the constructor
// function itself. But this is broken if the prototype is changed.
// Either the default constructor  prototype should be modified directly
// (thereby preserving the original constructor property) or the constructor
// property needs to be added back manually (if the prototype was changed.)

function Car(make) {
  this.make = make;
}

let subaru = new Car('Subaru');
console.log(Car.prototype.constructor);
// [Function: Car] (constructor itself).

console.log(subaru.make);
// 'Subaru', make assignment works.

console.log(subaru.constructor);
// [Function: Car] same as above.

let mazda = new subaru.constructor('Mazda');
// Works b/c original prototype unchanged.

console.log(mazda.make);
// 'Mazda', make assignment still works.

console.log(mazda.constructor);
// [Function: Car].

let car = { wheels: 4 };
// New obj. to use as prototype.
Car.prototype = car;
// Replace Car constructor's default prototype.
console.log(Car.prototype.constructor);
// [Function: Object].
// Prototype chain now goes back to the default Object prototype.

let toyota = new subaru.constructor();
console.log(toyota.make);
// undefined, make property assignment broken.

console.log(toyota.constructor);
// [Function: Object]

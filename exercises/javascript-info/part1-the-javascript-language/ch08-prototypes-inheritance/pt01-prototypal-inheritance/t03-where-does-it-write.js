let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property:
// animal or rabbit?

// A. Methods always work with the invoking object.
// The full property will be written to rabbit:
console.log(rabbit.full); // true
console.log(animal.full); // undefined

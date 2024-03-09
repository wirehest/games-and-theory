// Let’s create a new rabbit object:
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

// These calls do the same thing or not?

rabbit.sayHi(); // Rabbit.
// A1: Proto chain invokes sayHi from Rabbit prototype with this = rabbit.

Rabbit.prototype.sayHi(); // undefined
// A2: Directly invokes sayHi on Rabbit, but no this.

Object.getPrototypeOf(rabbit).sayHi(); // undefined
// A3: Gets prototype from rabbit but does not invoke it from rabbit.

rabbit.__proto__.sayHi(); // undefined
// A4: Same as A2, A3.

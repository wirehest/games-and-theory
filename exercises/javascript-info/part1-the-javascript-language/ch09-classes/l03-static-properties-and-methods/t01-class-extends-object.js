// As we know, all objects normally inherit from Object.prototype and get
// access to “generic” object methods like hasOwnProperty etc.
// For instance:

class Rabbit1 {
  constructor(name) {
    this.name = name;
  }
}

let rabbit1 = new Rabbit1('Rab');

// hasOwnProperty method is from Object.prototype
console.log(rabbit1.hasOwnProperty('name')); // true

// But if we spell it out explicitly like "class Rabbit extends Object", then
// the result would be different from a simple "class Rabbit"?
// What’s the difference?
// Here’s an example of such code (it doesn’t work – why? fix it?):

class Rabbit extends Object {
  constructor(name) {
    super(); // A: Subclass needs to call super();
    this.name = name;
  }
}

let rabbit = new Rabbit('Rab');
console.log(rabbit.hasOwnProperty('name'));

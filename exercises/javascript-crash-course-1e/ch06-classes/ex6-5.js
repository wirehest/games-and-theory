'use strict';


/** 
 * 6-5.  Inspect the moona and yappy instances in the console. You should see
 * that their sayHello methods are defined directly on the instances, whereas
 * the kiki and felix instances have it defined on their respective prototypes.
 */

function Cat(name) {
  this.name = name;
}

Cat.prototype.sayHello = function () {
  console.log(`Miaow! My name is ${this.name}.`);
};

class Dog {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Woof! My name is ${this.name}.`);
  }
}


let yappy = new Dog('Yappy');
yappy.sayHello = function () {
  console.log(`Yap yap yap! My name is ${this.name}.`);
}

let moona = new Cat("Moona");
moona.sayHello = function () {
  console.log(`HELLO!!! I'M ${this.name.toUpperCase()}!`);
};

let kiki = new Cat("Kiki");

let felix = new Dog("Felix");

yappy.sayHello();
moona.sayHello();

kiki.sayHello();
felix.sayHello();
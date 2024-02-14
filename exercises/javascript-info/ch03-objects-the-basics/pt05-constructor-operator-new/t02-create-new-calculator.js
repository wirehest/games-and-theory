'use strict';

let calculator = new Calculator();
calculator.read();

function Calculator() {
  this.read() =  {
    for (let operand of ['a', 'b']) {
      this[operand] = +prompt(`${operand}: `);
    }
  };
  this.sum() {
    
  };
  this.mul() {

  };
}

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());


let calculator2 = {
  read() {
    for (let operand of ['a', 'b']) {
      this[operand] = +prompt(`Number for ${operand}: `);
    }
  },

  sum() {
    return `Sum: ${this.a + this.b}`;
  },

  mul() {
    return `Product: ${this.a * this.b}`;
  },
};
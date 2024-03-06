'use strict';

let calculator = {
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

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
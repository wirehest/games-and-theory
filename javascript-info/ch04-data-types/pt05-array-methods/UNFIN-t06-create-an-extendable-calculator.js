'use strict';

function Calculator() {
  // [this.val1, this.operand, this.val2] = str.split(' ');
  // this.operand,

  this.calculate = (str) => {
    [this.val1, this.operand, this.val2] = str.split(' ');
    if (this.operand === '+') {
      return +this.val1 + +this.val2;
    } else if (this.operand === '-') {
      return +this.val1 - +this.val2;
    }
  };
  this.addMethod(name, func) {
    
  }
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7')); // 10
console.log(calc);

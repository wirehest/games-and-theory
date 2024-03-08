/** A: Constructor for extendable calculator objects. */
function Calculator() {
  this.operations = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => +a - +b,
  };
  this.calculate = (str) => {
    [this.val1, this.operand, this.val2] = str.split(' ');
    return this.operations[this.operand](this.val1, this.val2);
  };
  this.addMethod = (operation, func) => {
    this.operations[operation] = func;
  };
}

let powerCalc = new Calculator();

console.assert(powerCalc.calculate('3 + 7') === 10, '+');
console.assert(powerCalc.calculate('3 - 7') === -4, '-');

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

console.assert(powerCalc.calculate('5 * 3') === 15, '*');
console.assert(powerCalc.calculate('49 / 7') === 7, '/');
console.assert(powerCalc.calculate('2 ** 3') === 8, '**');

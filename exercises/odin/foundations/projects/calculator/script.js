let firstNumber;
let secondNumber;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      add(a, b);
    case '-':
      subtract(a, b);
    case '*':
    case '/':
  }
}

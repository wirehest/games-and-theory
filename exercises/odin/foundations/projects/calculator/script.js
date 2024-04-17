function mainLoop() {
  let display = document.querySelector('.display');
  let container = document.querySelector('.container');
  // let firstNumber;
  // let secondNumber;

  // let buttons = document.querySelectorAll('button');
  // buttons.forEach((button) =>
  //   button.addEventListener('click', (event) => console.log(event))
  // );

  container.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      switch (event.target.textContent) {
        case 'AC':
          display.textContent = '';
          break;
        case '=':
          let argsObject = parseOperation(display.textContent);
          // console.log(argsObject);
          // console.log(operate(argsObject));
          display.textContent = operate(argsObject);
          break;
        default:
          display.textContent += event.target.textContent;
      }
    }
  });

  function operate({ operator, a, b }) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
    }
  }

  function parseOperation(displayString) {
    let operatorsPattern = /[\+\-\*\/]/gu;
    let operator = displayString.match(operatorsPattern)[0];
    let [a, b] = displayString.split(operatorsPattern).map((x) => +x);
    return { operator, a, b };
  }
}

mainLoop();

// TODO
// Track state so that after completing one operation, clicking number
// immeidately goes into the next operation (i.e., clears display)

// You should round answers with long decimals so that they don’t overflow the screen.
// Pressing = before entering all of the numbers or an operator could cause problems!
// Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”
// Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
// Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
// Add a “backspace” button, so the user can undo if they click the wrong number.
// Add keyboard support!

function mainLoop() {
  let display = document.querySelector('.display');
  let container = document.querySelector('.container');
  let operator = null;
  let num1 = null;
  let num2 = null;
  let decimal = false;

  let startChain = false;
  let clearOnNumber = false;
  let clearDisplay = () => (display.textContent = '');

  // console.log(operate({ operation: '+', a: '1', b: '2' }));

  container.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'BUTTON') return;

    let button = event.target.textContent;
    let buttonIsNumber = '.0123456789'.includes(button);
    let buttonIsOperator = '/*-+'.includes(button);
    let buttonIsEquals = button === '=';
    let displayHasNumber = display.textContent !== '';
    let num1AndOperatorNotNull = !(num1 === null) && !(operator === null);

    if (button === 'AC') {
      clearDisplay();
      [operator, num1, num2, clearOnNumber] = [null, null, null, true];
    }

    if (buttonIsNumber) {
      if (clearOnNumber) clearDisplay();
      clearOnNumber = false;

      if (display.textContent.includes('.') && button === '.') return;
      if (display.textContent === '0' && button === '0') return;
      if (display.textContent === '0' && !(button === '.')) {
        display.textContent = button;
        return;
      }
      if (display.textContent === '' && button === '.') {
        display.textContent = '0.';
        return;
      }
      display.textContent += button;
    }

    if (buttonIsOperator) {
      if (num1AndOperatorNotNull) {
        if (displayHasNumber) {
          clearOnNumber = true;
          num2 = display.textContent;
          num1 = operate({ operator, num1, num2 });
          display.textContent = num1;
          num2 = null;
          operator = button;
        } else {
          operator = button;
        }
      } else {
        if (displayHasNumber) {
          clearOnNumber = true;
          num1 = display.textContent;
          operator = button;
        }
      }
    }

    if (buttonIsEquals) {
      if (num1AndOperatorNotNull) {
        if (displayHasNumber) {
          clearOnNumber = true;
          num2 = display.textContent;
          num1 = operate({ operator, num1, num2 });
          display.textContent = num1;
          [num2, operator] = [null, null];
        }
      }
    }
  });

  function operate({ operator, num1, num2 }) {
    [num1, num2] = [+num1, +num2];
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => (num2 === 0 ? 'ERROR' : num1 / num2);

    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
    }
  }

  // function parseOperation(displayString) {
  //   let operatorsPattern = /[\+\-\*\/]/gu;
  //   let operator = displayString.match(operatorsPattern)[0];
  //   let [a, b] = displayString.split(operatorsPattern).map((x) => +x);
  //   return { operator, a, b };
  // }
}

mainLoop();

// TODO
// Track state so that after completing one operation, clicking number
// immeidately goes into the next operation (i.e., clears display)

// You should round answers with long decimals so that they don’t overflow the screen.
// Pressing = before entering all of the numbers or an operator could cause problems!
// Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”

// Users can get floating point numbers if they do the math required to get one,
// but they can’t type them in yet. Add a . button and let users input decimals!
// Make sure you don’t let them type more than one though: 12.3.56.5. It is hard
// to do math on these numbers. (disable the decimal button if there’s already one
// in the display)

// At least make the operations a different color from the keypad buttons.

// Add a “backspace” button, so the user can undo if they click the wrong number.

// Add keyboard support!

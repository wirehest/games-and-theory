function mainLoop() {
  let display = document.querySelector('.display');
  let main = document.querySelector('main');
  let [operator, num1, num2] = [null, null, null];
  let maxDigits = 9;

  let clearOnNumber = false;
  let clearDisplay = () => (display.textContent = '');

  main.addEventListener('click', (event) => {
    if (
      !(
        event.target.nodeName === 'BUTTON' ||
        event.target.className === 'backspace'
      )
    ) {
      return;
    }

    let button = event.target.textContent;
    let buttonIsNumber = '.0123456789'.includes(button);
    let buttonIsOperator = '/*-+'.includes(button);
    let buttonIsEquals = button === '=';
    let displayHasNumber = display.textContent !== '';
    let num1AndOperatorNotNull = !(num1 === null) && !(operator === null);

    if (button === '⌫') {
      let textLength = display.textContent.length;
      display.textContent = display.textContent.slice(0, textLength - 1);
    }

    if (button === 'AC') {
      clearDisplay();
      [operator, num1, num2, clearOnNumber] = [null, null, null, true];
    }

    if (buttonIsNumber) {
      if (clearOnNumber) clearDisplay();
      clearOnNumber = false;

      if (display.textContent.length === 9) return;
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
    let operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => (b === 0 ? 'ERROR' : a / b),
    };
    let result = operations[operator](+num1, +num2);

    let sign = Math.sign(result);
    result = Math.abs(result);
    let [int, dec] = [Math.trunc(result), result % 1];

    int = int > +'9'.repeat(maxDigits) ? +'9'.repeat(maxDigits) : int;
    let maxDecimals = maxDigits - String(int).length - 1;
    dec = +dec.toFixed(maxDecimals);

    return sign * (int + dec);
  }
}

mainLoop();

// Add keyboard support!

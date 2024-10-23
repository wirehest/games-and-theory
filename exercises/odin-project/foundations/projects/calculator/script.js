function mainLoop() {
  const NUMS = '.0123456789';
  const OPERS = '/*-+';
  let display = document.querySelector('.display');
  let [operator, num1, num2] = [null, null, null];
  let maxDigits = 9;

  let clearOnNumber = false;
  let clearDisplay = () => (display.textContent = '');

  document.addEventListener('keydown', (event) => {
    if (
      [...(NUMS + OPERS), '=', 'Delete', 'Backspace', 'Enter'].includes(
        event.key
      )
    ) {
      let key = event.key === 'Enter' ? '=' : event.key;
      console.log(key);
      let targetButton = document.querySelector(`button[value='${key}']`);
      targetButton.click();
    }
  });

  document.addEventListener('click', (event) => {
    if (!(event.target.nodeName === 'BUTTON')) return;

    let button = event.target.textContent;
    let buttonIsNumber = NUMS.includes(button);
    let buttonIsOperator = OPERS.includes(button);
    let buttonIsEquals = button === '=';
    let displayHasNumber = display.textContent !== '';
    let num1AndOperatorNotNull = !(num1 === null) && !(operator === null);
    let inputExists = false;

    if (button === '⌫') {
      let textLength = display.textContent.length;
      display.textContent = display.textContent.slice(0, textLength - 1);
      inputExists = displayHasNumber ? true : false;
    }

    if (button === 'AC') {
      clearDisplay();
      [operator, num1, num2, clearOnNumber] = [null, null, null, true];
      inputExists = false;
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
      inputExists = true;
    }

    if (buttonIsOperator) {
      if (num1AndOperatorNotNull) {
        if (inputExists) {
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
          inputExists = false;
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
      '/': (a, b) => (b === 0 ? 'NaN DUMMY' : a / b),
    };
    let result = operations[operator](+num1, +num2);
    if (result === 'NaN DUMMY') return result;

    let sign = Math.sign(result);
    result = Math.abs(result);
    let [int, dec] = [Math.trunc(result), result % 1];

    console.log(int, dec);

    int = int > +'9'.repeat(maxDigits) ? +'9'.repeat(maxDigits) : int;
    let maxDecimals = Math.max(0, maxDigits - String(int).length - 1);
    dec = +dec.toFixed(maxDecimals);

    return sign * (int + dec);
  }
}

mainLoop();

// When entering number, then pressing operator, need to leave the
// number on-screen but do not allow it to be entered as the next variable ...

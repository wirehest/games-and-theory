'use strict';

/**
 * Collects numeric values into an array and displays array values once an exit
 * condition is met (non-numeric input, empty string, clicking 'Cancel.')
 */
const sumInput = function () {
  let values = [];
  while (true) {
    let userInput = prompt('Enter a number:', 0);

    if (isFinite(userInput) && userInput !== null && userInput !== '') {
      values.push(+userInput);
    } else {
      alert('Exiting');
      break;
    }
  }
  return values;
};

alert(sumInput());

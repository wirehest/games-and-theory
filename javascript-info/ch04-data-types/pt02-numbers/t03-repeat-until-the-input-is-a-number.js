'use strict';

function readNumber() {
  let userInput = Infinity;
  do {
    userInput = prompt('Enter a number, CANCEL to cancel.', 0);
  } while (!isFinite(userInput));

  // Catches cancel and space-only lines
  // (Slightly different from answer below).
  if (userInput === null || userInput.trim() === '') return null;

  return +userInput;
}

alert(readNumber());

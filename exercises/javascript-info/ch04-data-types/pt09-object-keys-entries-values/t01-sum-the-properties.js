'use strict';

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

/**
 * A: Returns the sum of all salaries using the Object.values method and a
 * for..of loop.
 */
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

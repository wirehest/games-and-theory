'use strict';

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

/** A: Returns the name of the top-paid person. */
function topSalary(salaries) {
  if (!Object.keys(salaries).length) return null;

  const sorted = Object.entries(salaries).sort((a, b) => b[1] - a[1]);

  return sorted[0][0];
}

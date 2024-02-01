'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function sumSalaries(object) {
  let tally = 0;
  for (let key in object) tally += object[key]; 
  return tally;
}

console.log(sumSalaries(salaries));
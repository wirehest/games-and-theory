'use strict';

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(JSON.stringify(menu));
multiplyNumeric(menu);
console.log(JSON.stringify(menu));

/* after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

function multiplyNumeric(obj) {
  for (let key in obj) typeof obj[key] === 'number' ? obj[key] *= 2 : undefined;
}


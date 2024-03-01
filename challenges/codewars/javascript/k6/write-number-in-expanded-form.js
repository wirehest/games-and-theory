'use strict';


/** Returns an input number in expanded form. E.g., 123 = '100 + 20 + 3'. */
function expandedForm(num) {
  let numStr = String(num).split('').reverse();
  let expanded = [];

  for (let [i, digit] of numStr.entries()) {
    expanded.push(digit + '0'.repeat(i));
  }
  expanded = expanded.filter(elem => !!+elem).reverse();
  
  return expanded.join(' + ');
}

expandedForm(10203);
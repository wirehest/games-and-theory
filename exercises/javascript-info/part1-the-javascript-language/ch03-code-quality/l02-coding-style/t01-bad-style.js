// Original code.
// function pow(x,n) // Fix spacing.
// { // Brace on new line.
//   let result=1; // Spacing.
//   for(let i=0;i<n;i++) {result*=x;} // Spacing. Braces unneeded if one-line.
//   return result;
// }
//
// let x=prompt("x?",''), n=prompt("n?",'')  // Spacing. Semicolons. Quotes.
// if (n<=0)   // Spacing. Brace on newline below.
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }     // Line above too long. Limit to 80.
// else    // Else broken up across multiple lines.
// {
//   alert(pow(x,n))   // Spacing, no semi-colon.
// }

/** Styled code. */
function powClean(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;

  return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n <= 0) {
  alert(`Power ${n} is not supported, 
    please enter an integer number greater than zero`);
} else {
  alert(pow(x, n));
}

let i = 0;

while (i != 10) {
  i += 0.2;

  if (i > 9) console.log(i);
  if (i > 11) return;
}

// Q. This loop is infinite. It never ends. Why?
// A. The variable i never equals exactly 10 due to rounding errors.

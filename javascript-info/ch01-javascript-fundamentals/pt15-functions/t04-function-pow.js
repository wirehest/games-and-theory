function pow(x, n) {
  console.log(x, n);
  return x ** n;
}

function getArgs() {
  let x = Number(prompt("Enter a value for x:"));
  let n;
  do {
    n = Number(prompt("Enter a value for n (>0):"));
  } while (n < 0);

  return [x, n];
}

const result = pow(...getArgs());
alert(result);
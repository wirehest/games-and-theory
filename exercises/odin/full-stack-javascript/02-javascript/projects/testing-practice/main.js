export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

// Use prototype-based inheritance for fun:
function Calculator() {}

Calculator.prototype = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(string, offset) {
  return string
    .split('')
    .map((char) => {
      let shiftedChar = char;
      let isUpperCase = /[A-Z]/.test(char);
      let charCode = char.toLowerCase().charCodeAt();
      // console.log(charCode);

      if (charCode > 96 && charCode < 123) {
        let shiftedCode = ((charCode + offset - 97) % 26) + 97;
        shiftedChar = String.fromCharCode(shiftedCode);
      }

      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    })
    .join('');
}

function analyzeArray(array) {
  let length = array.length;
  let average = array.reduce((acc, x) => acc + x) / length;
  let min = array.reduce((acc, x) => (acc = acc < x ? acc : x));
  let max = array.reduce((acc, x) => (acc = acc > x ? acc : x));

  return { average, min, max, length };
}

// Question 1
function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

console.assert(sumRange(3) === 6, 'Q1. sumRange(3) should equal 6');

// Question 2
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.assert(power(2, 4) === 16, 'Q2-1. power(2,4) should equal 16');
console.assert(power(2, 3) === 8, 'Q2-2. power(2,4) should equal 16');
console.assert(power(2, 2) === 4, 'Q2-3. power(2,4) should equal 16');
console.assert(power(2, 1) === 2, 'Q2-4. power(2,4) should equal 16');
console.assert(power(2, 0) === 1, 'Q2-5. power(2,4) should equal 16');

// Question 3
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.assert(factorial(5) === 120, 'Q3. factorial(5) should equal 120');

// Question 4
function all(arr, callback) {
  if (arr.length === 0) return 'empty array';

  if (arr.length === 1) return callback(arr.pop());

  if (callback(arr.pop()) === false) return false;
  return all(arr, callback);
}

console.assert(
  all([1, 2, 9], (num) => num < 7) === false,
  'Q4. should be false',
);

// Question 5
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr.pop() * productOfArray(arr);
}

console.assert(
  productOfArray([1, 2, 3]) === 6,
  'Q5-1. productOfArray([1, 2, 3]) should equal 6',
);
console.assert(
  productOfArray([1, 2, 3, 10]) === 60,
  'Q5-2. productOfArray([1, 2, 3, 10]) should equal 60',
);

// Question 6
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

function contains(obj, val) {
  for (let key of Object.keys(obj)) {
    if ({}.toString.call(obj[key]) === '[object Object]') {
      return contains(obj[key], val);
    } else {
      if (obj[key] === val) return true;
    }
  }
  return false;
}

console.assert(contains(nestedObject, 44) === true, 'Q6-1. should be true');
console.assert(
  contains(nestedObject, 'foo') === false,
  'Q6-2. should be false',
);

// Question 7
function totalIntegers(arr) {
  let count = 0;

  for (let element of arr) {
    if (element instanceof Array) {
      count += totalIntegers(element);
    } else {
      if (typeof element === 'number') count++;
    }
  }

  return count;
}

console.assert(
  totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]) === 7,
  'Q7. should equal seven',
);

// Question 8
function sumOfSquares(arr) {
  let sum = 0;

  for (let element of arr) {
    if (element instanceof Array) {
      sum += sumOfSquares(element);
    } else {
      if (typeof element === 'number') sum += element ** 2;
    }
  }

  return sum;
}

console.assert(sumOfSquares([1, 2, 3]) === 14, 'Q8-1. should equal 14');
console.assert(sumOfSquares([[1, 2], 3]) === 14, 'Q8-2. should equal 14');
console.assert(sumOfSquares([[[[[[[[[1]]]]]]]]]) === 1, 'Q8-3. should equal 1');
console.assert(
  sumOfSquares([10, [[10], 10], [10]]) === 400,
  'Q8-4. should equal 400',
);

// Question 9
function replicate(reps, num) {
  if (reps <= 0) return [];
  return [num].concat(replicate(--reps, num));
}

console.assert(
  JSON.stringify(replicate(3, 5)) === '[5,5,5]',
  'Q9-1. should be [5,5,5]',
);
console.assert(
  JSON.stringify(replicate(1, 69)) === '[69]',
  'Q9-2. should be [69]',
);
console.assert(JSON.stringify(replicate(-2, 6)) === '[]', 'Q9-3. should be []');

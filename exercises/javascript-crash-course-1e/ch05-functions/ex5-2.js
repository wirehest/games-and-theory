'use strict';


/**
 * 5-2.  You’ve now seen three different ways of creating functions: function
 * declarations, function expressions, and arrow functions. Write each of the
 * following in all three styles:
 * 
 * A function that takes a number from 0 to 5 and returns the English word for
 * that number. For example, 1 should return "one". Hint: use an array to
 * define the mapping from numbers to strings.
 * 
 * A function with no parameters that prints how many times it’s been called.
 * Hint: define a variable outside of the function to keep track of the number
 * of calls, like we did in the “Side Effects” section on page 77.
 * 
 * A function that prints the current date and time. Hint: you can get the
 * current date and time with new Date().
 */

let numToStr = ['zero', 'one', 'two', 'three', 'four', 'five'];
let counter1 = 0, counter2 = 0, counter3 = 0;

function numToStr1(n) {
  return numToStr[n];
}

let numToStr2 = function (n) {
  return numToStr[n];
}

let numToStr3 = n => numToStr[n];


function printCallCount1() {
  console.log(counter1++);
}

let printCallCount2 = function () {
  console.log(counter2++);
}

let printCallCount3 = () => console.log(counter3++);


function printDate1() {
  console.log(new Date());
}

let printDate2 = function () {
  console.log(new Date());
}

let printDate3 = () => console.log(new Date());
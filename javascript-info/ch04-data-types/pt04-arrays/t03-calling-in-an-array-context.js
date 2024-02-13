'use strict';

// What is the result? Why?

let arr = ['a', 'b'];

arr.push(function () {
  console.log(this);
});

arr[2](); // A: Will output the arr array contents: ['a', 'b', function].

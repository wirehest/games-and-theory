'use strict';


/** Creates a String method to return a camel-cased string. */
String.prototype.camelCase = function() {
  if (this === '') return '';
  
  let camelCased = [];
  const words = this.split(' ');
  for (let word of words) {
    camelCased.push(word.at(0).toUpperCase() + word.slice(1));
  }

  return camelCased.join('');
}


console.assert("test case".camelCase() === "TestCase", '"test case"');
console.assert("camel Case method".camelCase() === "CamelCaseMethod",
  '"camel Case method"');
console.assert("say hello".camelCase() === "SayHello", '"say hello"');
console.assert("camel case word".camelCase() === "CamelCaseWord",
  '"camel case word"');
console.assert("".camelCase() === "", '"blank"');
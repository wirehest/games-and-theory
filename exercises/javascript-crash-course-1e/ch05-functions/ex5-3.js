'use strict';


/**
 * 5-3.  Write a function called makeWrapper that takes a prefix and a suffix,
 * and returns a new function that adds the prefix and suffix to a provided
 * string. For example, you could enter
 * 
 * let bracketWrapper = makeWrapper("[", "]");
 * 
 * and then call bracketWrapper("Bracket me!"); to get the string
 * "[Bracket me!]". Likewise, you could enter
 * 
 * let bracesWrapper = makeWrapper("{", "}");
 * 
 * and then call bracesWrapper("Brace Me!"); to get the string "{Brace me!}".
 */

function makeWrapper(prefix, suffix) {
  return (string) => prefix + string + suffix;
}

const bracketWrapper = makeWrapper('[', ']');
const bracesWrapper = makeWrapper('{', '}');

console.log(`Test bracketWrapper: ${bracketWrapper('Bracket me!')}`);
console.log(`Test bracesWrapper: ${bracesWrapper('Brace me!')}`);

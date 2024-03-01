'use strict';


/** Converts a string into the NATO phonetic alphabet. */
function toNato(words) {
  let natoed = [];

  for (let c of [...words].filter(x => x !== ' ')) {
    // Access preloaded NATO object.
    natoed.push(NATO[c.toUpperCase()] ?? c);
  }
  return natoed.join(' ');
}
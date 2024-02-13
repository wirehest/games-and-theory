'use strict';

/**
 * If str length exceeds maxLength, truncates the string and adds an ellipsis
 * character "…" to make its length equal to maxLength.
 */
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    let truncated = str.split('');
    truncated.length = maxLength - 1;
    return truncated.join('') + '…';
  }
  return str;
}

console.assert(
  truncate("What I'd like to tell on this topic is:", 20) ===
    "What I'd like to te…"
);
console.assert(truncate('Hi everyone!', 20) === 'Hi everyone!');

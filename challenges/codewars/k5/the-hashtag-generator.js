'use strict';

/** Formats the input string like a hashtag, i.e., PascalCase, #-prefix. */
function generateHashtag(str) {
  if (str.trim().length === 0) return false;
  const words = str
    .split(' ')
    .filter((x) => x !== '')
    .map(
      (x) => x[0].toUpperCase() + (x.slice(1, x.length).toLowerCase() ?? '')
    );
  const hashtag = '#' + words.join('');
  return hashtag.length <= 140 ? hashtag : false;
}

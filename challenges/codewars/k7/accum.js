/**
 * Takes all the letters in the input string and repeats them a number of times
 * equal to their position in the string; capitalizes the first letter.
 */
function accum(s) {
  let chars = s.split('').map(c => c.toUpperCase());
  for (let i = 0; i < s.length; i++) {
    chars[i] += chars[i].toLowerCase().repeat(i);
  }
  return chars.join('-');
}

console.assert(accum("abcd") === "A-Bb-Ccc-Dddd");
console.assert(accum("RqaEzty") === "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.assert(accum("cwAt") === "C-Ww-Aaa-Tttt");
console.assert(accum("ZpglnRxqenU")
  === "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-"
    + "Uuuuuuuuuuu", '#4');
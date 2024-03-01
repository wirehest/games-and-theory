'use strict';


/**
 * Checks whether the sums of both halves of a string equal each other.
 * Odd-length strings have the middle digit disregarded.
 */
function luckCheck(ticket) {
  const l = ticket.length;
  const notIntegers = ![...ticket].every(x => '1234567890'.includes(x));

  if (ticket.length === 0 || notIntegers) {
    throw new Error();
  }

  if (ticket.length % 2) {
    ticket = ticket.slice(0, Math.floor((l/2))) 
    + ticket.slice(Math.ceil((l/2), l));
  }

  const halfSum = [...ticket.slice(0, (l/2))].reduce((a, c) => a + +c, 0);
  const fullSum = [...ticket].reduce((a, c) => a + +c, 0);

  return halfSum === (fullSum / 2) ? true : false;
}
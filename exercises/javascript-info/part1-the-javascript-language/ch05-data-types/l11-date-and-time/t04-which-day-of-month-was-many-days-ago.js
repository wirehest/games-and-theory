'use strict';

let date = new Date(2015, 0, 2);

/** A: Subtracts the number of days from the date and returns. */
function getDateAgo(date, days) {
  const dateAgo = new Date(date);
  dateAgo.setDate(date.getDate() - days);

  return dateAgo.getDate();
}

console.log(`\nOriginal date var:\n${String(date)}\n`);
console.log(`${String(getDateAgo(date, 1))} // -1 day: 1 Jan 2015`);
console.log(`${String(getDateAgo(date, 2))} // -31 days: 31 Dec 2014`);
console.log(`${String(getDateAgo(date, 365))} // -365 days: 2 Jan 2014`);
console.log(`\nOriginal date var unmodified:\n${String(date)}`);

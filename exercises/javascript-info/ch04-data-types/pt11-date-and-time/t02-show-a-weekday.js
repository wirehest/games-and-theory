'use strict';

let date = new Date(2012, 0, 3); // 3 Jan 2012

/**
 * A: Returns the weekday of the input date in the format:
 * MO, TU, WE, TH, FR, SA, SU.
 */
function getWeekDay(date) {
  return String(date).slice(0, 2).toUpperCase();
}

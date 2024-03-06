'use strict';

/** A: Returns the last day of the month for the given year and month. */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  date.setDate(date.getDate() - 1);

  return date.getDate();
}

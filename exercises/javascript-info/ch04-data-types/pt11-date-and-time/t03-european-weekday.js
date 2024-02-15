'use strict';

/** A: Returns the European-style day of the week. */
function getLocalDay(date) {
  const d = date.getDay();
  return d === 0 ? 7 : d;
}

'use strict';

/** A: Returns the number of seconds elapsed today. */
function getSecondsToday() {
  const startStamp = new Date().setHours(0, 0, 0, 0);

  return Math.round((Date.now() - startStamp) / 1000);
}

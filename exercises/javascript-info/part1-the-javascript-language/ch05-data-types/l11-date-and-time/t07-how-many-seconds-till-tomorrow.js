'use strict';

/** A: Returns the number of seconds elapsed today. */
function getSecondsToTomorrow() {
  const today = new Date();
  const secRemain =
    (23 - today.getHours()) * 3600 +
    (60 - today.getMinutes()) * 60 +
    today.getSeconds() +
    today.getMilliseconds();

  return Math.round(secRemain);
}

'use strict';

/**
 * Takes an int representing seconds and returns it in a human-readable
 * format.
 */
function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  seconds = seconds - hh * 3600;

  let mm = Math.floor(seconds / 60);
  seconds = seconds - mm * 60;

  hh = String(hh).padStart(2, 0);
  mm = String(mm).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);

  return `${hh}:${mm}:${seconds}`;
}

'use strict';

/**
 * A: Calculates the time elapsed since the input date and formats the return
 * as follows:
 * - If elapsed time < 1 second, then "right now."
 * - If elapsed time <  1 minute, then "n sec. ago."
 * - If elapsed time < 1 hour, then "m min. ago."
 * - Otherwise, return the date in the format: "DD.MM.YY HH:mm."
 */
function formatDate(date) {
  let elapsed = Math.round((Date.now() - date.getTime()) / 1000);

  if (elapsed < 1) return 'right now';
  if (elapsed < 60) return `${elapsed} sec. ago`;
  if (elapsed < 3600) return `${Math.round(elapsed / 60)} min. ago`;

  const dd = String(date.getDate()).padStart(2, 0);
  const mo = String(date.getMonth() + 1).padStart(2, 0);
  const yy = String(date.getFullYear()).slice(2, 4);
  const hh = String(date.getHours()).padStart(2, 0);
  const mm = String(date.getMinutes()).padStart(2, 0);

  return `${dd}.${mo}.${yy} ${hh}:${mm}`;
}

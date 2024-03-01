'use strict';

/** Converts a hex string to base-ten RGB channels.*/
function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5, 7), 16),
  };
}

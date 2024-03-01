'use strict';

/** Returns the domain name from a URL. */
function domainName(url) {
  return url
    .replace(/^(https?:\/\/)?(www\.)?/mu, '')
    .replace(/(\/.*)$/mu, '')
    .replace(/(\.[a-z]{2}\.?[a-z]*)$/mu, '');
}

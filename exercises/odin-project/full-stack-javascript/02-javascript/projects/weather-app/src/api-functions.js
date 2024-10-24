/**
 * API Functions Module
 *
 * Functions and variables used with the Visual Crossing endpoint.
 * Includes localStorage-related functions because some endpoint parameters
 * are stored in localStorage.
 */
import dummyData from './dummy-data.js';
import { format } from 'date-fns';

let apiKey, searchString, unitGroup;
const fetchOptions = { mode: 'cors' };

export { unitGroup, apiKey, searchString };

function makeQuery() {
  let query = 'https://weather.visualcrossing.com/VisualCrossingWebServices/';
  query += `rest/services/timeline/${searchString}`;
  query += `?key=${apiKey}&unitGroup=${unitGroup}`;
  query += '&include=fcst,days,current';

  return query;
}

export function getRawData() {
  if (apiKey === '') {
    return Promise.resolve(dummyData);
  } else {
    return fetch(makeQuery(), fetchOptions)
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response;
      })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  }
}

export function setSearchString(str) {
  searchString = str;
}

export function toggleUnits() {
  unitGroup = unitGroup === 'us' ? 'metric' : 'us';
}

export function updateApiKey(newKey) {
  apiKey = newKey;
}

export function checkStorage() {
  if (storageAvailable('localStorage')) {
    if (localStorage.length === 0) {
      apiKey = '';
      searchString = 'Tokyo';
      unitGroup = 'us';
      return;
    }

    let localData = JSON.parse(localStorage.data);
    apiKey = localData.key;
    unitGroup = localData.units;
    searchString = localData.lastSearch;
  } else {
    apiKey = '';
    console.log('localStorage not available');
  }
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === 'QuotaExceededError' &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

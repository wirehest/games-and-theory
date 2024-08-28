// import apiKey from './config.js';
import dummyData from './dummy-data.js';
import { format } from 'date-fns';

let searchString = 'Tokyo';
// let startDate = '2024-08-27'; //format(Date.now(), 'yyyy-MM-dd') + '';
// let endDate = 'next5days';
let apiKey = '';
let unitGroup = '';
const fetchOptions = { mode: 'cors' };
// let rawData = getRawData();

function makeQuery() {
  let endpoint =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/';
  endpoint += `rest/services/timeline/${searchString}`;
  // endpoint += `rest/services/timeline/${searchString}/${startDate}/${endDate}`;
  endpoint += `?key=${apiKey}&unitGroup=${unitGroup}`;
  endpoint += '&include=fcst,days,current';
  return endpoint;
}

export function getRawData() {
  if (apiKey === '') {
    return Promise.resolve(dummyData);
  } else {
    return fetch(makeQuery(), fetchOptions).then((response) => response.json());
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
  // console.log(`new key set: ${apiKey}`);
}

export function checkStorage() {
  if (storageAvailable('localStorage')) {
    // apiKey = '';
    if (localStorage.length === 0) {
      // return;
    }
    // console.log(localStorage.data);
    // console.log(JSON.parse(localStorage.data));
    let localData = JSON.parse(localStorage.data);
    console.log(localData);

    apiKey = localData.key;
    unitGroup = localData.units;
    console.log(apiKey);
    console.log(unitGroup);
  } else {
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

export { unitGroup, apiKey };

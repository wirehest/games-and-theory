import apiKey from './config.js';
import dummyData from './dummy-data.js';

let searchString = 'archangelsk';
let startDate = '2024-08-26'; //Date.now();
let endDate = 'next5days';
// let apiKey = ...
let unitGroup = 'us';
let endpoint = 'https://weather.visualcrossing.com/VisualCrossingWebServices/';
endpoint += `rest/services/timeline/${searchString}/${startDate}/${endDate}`;
endpoint += `?key=${apiKey}&unitGroup=${unitGroup}`;
endpoint += '&include=fcst,days,current';
const fetchOptions = { mode: 'cors' };

let rawData = fetch(endpoint, fetchOptions)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    return response;
  });

// let rawData = Promise.resolve(dummyData);

export { rawData, unitGroup };

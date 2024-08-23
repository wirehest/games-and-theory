import './style.css';
import apiKey from './config.js';
import dummyData from './dummy-data.js';

let searchString = 'Victoria';
let startDate = '2024-08-23'; //Date.now();
let endDate = 'next5days';
// let apiKey = ...
let units = 'us';
let endpoint = 'https://weather.visualcrossing.com/VisualCrossingWebServices/';
endpoint += `rest/services/timeline/${searchString}/${startDate}/${endDate}`;
endpoint += `?key=${apiKey}&unitGroup=${units}`;
// endpoint += '&include=days,alerts,current';
const fetchOptions = { mode: 'cors' };

console.log(endpoint);

// let rawData = fetch(endpoint, fetchOptions);
let rawData = Promise.resolve(dummyData);

// rawData.then((res) => console.log(res)).catch((error) => console.log(error));
rawData
  // .then((res) => res.json())
  .then((res) => {
    console.log(res);
    // console.log(res.days);
    getDataFromJson(res);
  })
  .catch((error) => console.log(error));

// gets data used in this app from the raw json
function getDataFromJson(rawJson) {
  let location = {};
  let current = {};
  let forecast = [];

  // let current = rawJson.currentConditions;

  location.searched = rawJson.address;
  location.latitude = rawJson.latitude;
  location.longitude = rawJson.longitude;
  location.timezone = rawJson.timezone;
  location.actual = rawJson.resolvedAddress;

  current.conditions = rawJson.currentConditions.conditions;
  current.datetime = rawJson.currentConditions.datetime;
  current.description = rawJson.description;
  current.feelslike = rawJson.currentConditions.feelslike;
  current.humidity = rawJson.currentConditions.humidity;
  current.icon = rawJson.currentConditions.icon;
  current.temp = rawJson.currentConditions.temp;
  current.tempave = rawJson.days[0].temp;
  current.tempmax = rawJson.days[0].tempmax;
  current.tempmin = rawJson.days[0].tempmin;
  current.windspeed = rawJson.currentConditions.windspeed;
  current.precip = rawJson.currentConditions.precip;
  current.precipprob = rawJson.currentConditions.precipprob;
  current.preciptype = rawJson.currentConditions.preciptype; // array

  if (rawJson.days.length > 1) {
    rawJson.days.splice(1, rawJson.days.length).forEach((day) => {
      forecast.push({
        datetime: day.datetime,
        datetimeEpoch: day.datetimeEpoch,
        icon: day.icon,
        tempave: day.temp,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
      });
    });
  }

  console.log(location);
  console.log(current);
  console.log(forecast);

  // let alerts = rawJson.alerts;
}

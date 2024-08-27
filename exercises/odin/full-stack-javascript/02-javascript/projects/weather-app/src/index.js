import './style.css';
// import Snow from './icons/snow.svg';
import { rawData, unitGroup } from './api-functions.js';
import { getDataFromJson } from './json-functions.js';

let data = rawData
  .then((response) => getDataFromJson(response, unitGroup))
  .then((response) => updateDom(response));

async function updateDom(data) {
  console.log(data);
  // document.querySelector('#searched-location').textContent =
  //   data.location.searched;
  document.querySelector('body').style.background =
    `url(${data.bgSrc}) center / cover`;
  document.querySelector('#actual-location').textContent = data.location.actual;
  document.querySelector('#current-time').textContent = data.current.datetime;
  document.querySelector('#timezone').textContent =
    `(${data.location.timezone})`;
  document.querySelector('#longitude').textContent = data.location.longitude;
  document.querySelector('#latitude').textContent = data.location.latitude;
  document.querySelector('#conditions-icon').src = data.current.icon;
  document.querySelector('#conditions-desc').textContent =
    data.current.conditions;
  document.querySelector('#main-temp-value').textContent = data.current.temp;
  // document.querySelector('.temp-units').textContent = '°F';
  document.querySelector('#feelslike-value').textContent =
    data.current.feelslike;
  document.querySelector('#short-description').textContent =
    data.current.description;
  document.querySelector('#humidity .condition-value').textContent =
    data.current.humidity;
  document.querySelector('#uvindex .condition-value').textContent =
    data.current.uvindex;
  document.querySelector('#cloudcover .condition-value').textContent =
    data.current.cloudcover;
  document.querySelector('#highlow .condition-value').textContent =
    `${data.current.tempmax}/${data.current.tempmin}`;
  document.querySelector('#pressure .condition-value').textContent =
    data.current.pressure;
  document.querySelector('#visibility .condition-value').textContent =
    data.current.visibility;
  // document.querySelector('#').textContent =
  //   data.;
  // document.querySelector('#').textContent =
  //   data.;
  // document.querySelector('#').textContent =
  //   data.;
  // document.querySelector('#').textContent =
  //   data.;
  // document.querySelector('#').textContent =
  //   data.;
  document.querySelector('#windspeed .condition-value').textContent =
    data.current.windspeed;

  let forecastNodes = [...document.querySelector('#forecasts-grid').children];
  forecastNodes.forEach((node, i) => {
    node.querySelector('.forecast-day').textContent = data.forecast[i].day;
    node.querySelector('.forecast-date').textContent = data.forecast[i].date;
    node.querySelector('.forecast-img').src = data.forecast[i].icon;
    node.querySelector('.forecast-temp').textContent = data.forecast[i].tempave;
  });
}

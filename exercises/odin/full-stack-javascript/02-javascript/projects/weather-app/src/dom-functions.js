import {
  toggleUnits,
  getRawData,
  unitGroup,
  apiKey,
  updateApiKey,
  setSearchString,
  checkStorage,
} from './api-functions.js';
import { getDataFromJson } from './json-functions.js';

export function initialDraw() {
  checkStorage();
  drawPage().finally(addListeners);
}

async function drawPage() {
  try {
    let rawData = await getRawData();
    // console.log(rawData);
    let jsonData = await getDataFromJson(rawData, unitGroup);
    updateDom(jsonData);
  } catch (error) {
    throw new Error(error);
  }
}

function updateDom(data) {
  // console.log(data);
  // let units = getUnits(unitGroup);
  // console.log(units);
  // document.querySelector('#searched-location').textContent =
  //   data.location.searched;
  document.querySelector('body').style.background =
    `url(${data.bgSrc}) center / cover`;
  document.querySelector('#actual-location').textContent =
    data.location.resolvedAddress;
  document.querySelector('#current-time').textContent = data.current.datetime;
  document.querySelector('#timezone').textContent =
    `(${data.location.timezone})`;
  document.querySelector('#longitude').textContent = data.location.longitude;
  document.querySelector('#latitude').textContent = data.location.latitude;
  document.querySelector('#conditions-icon').src = data.current.icon;
  document.querySelector('#conditions-desc').textContent =
    data.current.conditions;
  document.querySelector('#main-temp-value').textContent = data.current.temp;
  document.querySelector('#main-temp-units').textContent = data.units.temp;
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

function addListeners() {
  let modal = document.querySelector('#api-key-modal');
  let keyForm = document.querySelector('#api-key-modal form');
  let searchForm = document.querySelector('#nav-box form');

  // saves API key to localStorage on quit/refresh
  window.addEventListener('beforeunload', () => {
    let settings = { key: apiKey, units: unitGroup };
    localStorage.setItem('data', JSON.stringify(settings));
  });

  document.querySelector('body').addEventListener('submit', (e) => {
    let formData = new FormData(keyForm);
    updateApiKey(formData.get('new-key'));
    // console.log(localStorage.data);
  });

  document.querySelector('body').addEventListener('click', (e) => {
    let targetId = e.target.id;
    // console.log(e);

    if (targetId === 'toggle-units') {
      toggleUnits();
      drawPage();
    }

    if (targetId === 'open-key-modal') {
      keyForm.reset();
      modal.showModal();
    }

    if (targetId === 'search-icon') {
      // console.log('submit-search click detected');
      let formData = new FormData(searchForm);
      setSearchString(formData.get('search-string'));
      drawPage();
    }

    if (targetId === 'cancel-button') modal.close();
  });
}

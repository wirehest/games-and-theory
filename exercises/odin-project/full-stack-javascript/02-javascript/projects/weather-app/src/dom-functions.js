/**
 * DOM Functions Module
 *
 * Functions related to drawing the DOM and event listeners.
 */
import {
  toggleUnits,
  getRawData,
  unitGroup,
  apiKey,
  updateApiKey,
  setSearchString,
  checkStorage,
  searchString,
} from './api-functions.js';
import { getDataFromJson } from './json-functions.js';

let errorMessage = document.querySelector('#search-error');

export function initialDraw() {
  checkStorage();
  drawPage().finally(addListeners);
}

async function drawPage() {
  let loadingIndicator = document.querySelector('#loading-indicator');
  loadingIndicator.showModal();
  errorMessage.textContent = '';

  try {
    let rawData = await getRawData();
    let jsonData = await getDataFromJson(rawData, unitGroup);
    updateDom(jsonData);
  } catch (error) {
    if (error.message === '400') {
      errorMessage.textContent = 'Try another location';
    }
    if (error.message === '401') {
      errorMessage.textContent = 'Check API key';
    }
    if (error.message === '429') {
      errorMessage.textContent = 'Too many requests, try again later';
    }
    if (error.message === '500') {
      errorMessage.textContent = 'Server problem, try again later';
    }
  }

  loadingIndicator.close();
}

// refreshes the entire page
function updateDom(data) {
  document.querySelector('#search-field').value = '';
  document.querySelector('body').style.background =
    `url(${data.bgSrc}) center / cover`;
  document.querySelector('#actual-location').textContent =
    data.location.resolvedAddress;
  document.querySelector('#current-time').textContent = data.current.datetime;
  document.querySelector('#current-date').textContent = data.current.date;
  document.querySelector('#timezone').textContent = data.location.timezone;
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
  document.querySelector('#precip .condition-value').textContent =
    data.current.precip;
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
  document.querySelector('#windspeed .condition-value').textContent =
    data.current.windspeed;

  let forecastNodes = [...document.querySelector('#forecasts-grid').children];
  forecastNodes.forEach((node, i) => {
    node.querySelector('.forecast-day').textContent = data.forecast[i].day;
    node.querySelector('.forecast-date').textContent = data.forecast[i].date;
    node.querySelector('.forecast-img').src = data.forecast[i].icon;
    node.querySelector('.forecast-temp').textContent = data.forecast[i].tempave;
  });

  document.querySelector('#input-key-field').value = apiKey;
}

function addListeners() {
  let modal = document.querySelector('#api-key-modal');
  let keyForm = document.querySelector('#api-key-modal form');
  let searchForm = document.querySelector('#search-form');

  // saves API key to localStorage on quit/refresh
  window.addEventListener('beforeunload', () => {
    let settings = { key: apiKey, units: unitGroup, lastSearch: searchString };
    localStorage.setItem('data', JSON.stringify(settings));
  });

  document.querySelector('body').addEventListener('submit', (e) => {
    if (e.target.id === 'search-form') {
      e.preventDefault();
      let formData = new FormData(searchForm);
      let searchString = formData.get('search-string');

      if (searchString.length === 0) return;
      setSearchString(searchString);
      drawPage();
    } else {
      let formData = new FormData(keyForm);
      updateApiKey(formData.get('new-key'));
    }
  });

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id === 'toggle-units') {
      toggleUnits();
      drawPage();
    }

    if (e.target.id === 'open-key-modal') {
      modal.showModal();
    }

    if (e.target.id === 'clear-key') {
      updateApiKey('');
      localStorage.clear();
      document.querySelector('#input-key-field').textContent = '';
      drawPage();
    }

    if (e.target.id === 'cancel-button') modal.close();
  });
}

/**
 * JSON Functions Module
 *
 * Contains functions that structure the raw data from Visual Crossing
 * into the structures used in the app.
 */
import Snow from './icons/snow.svg';
import SnowBg from './bg/snow.jpg';
import Rain from './icons/rain.svg';
import RainBg from './bg/rain.jpg';
import Fog from './icons/fog.svg';
import FogBg from './bg/fog.jpg';
import Wind from './icons/wind.svg';
import WindBg from './bg/wind.jpg';
import Cloudy from './icons/cloudy.svg';
import CloudyBg from './bg/cloudy.jpg';
import PartlyCloudyDay from './icons/partly-cloudy-day.svg';
import PartlyCloudyDayBg from './bg/partly-cloudy-day.jpg';
import PartlyCloudyNight from './icons/partly-cloudy-night.svg';
import PartlyCloudyNightBg from './bg/partly-cloudy-night.jpg';
import ClearDay from './icons/clear-day.svg';
import ClearDayBg from './bg/clear-day.jpg';
import ClearNight from './icons/clear-night.svg';
import ClearNightBg from './bg/partly-cloudy-night.jpg';
import { format } from 'date-fns';

export function getDataFromJson(rawJson, unitGroup) {
  let units = getUnits(unitGroup);
  let bgSrc = getVariableVisuals(rawJson.currentConditions.icon).bgSrc;

  let location = {};
  ['searched', 'latitude', 'longitude', 'timezone', 'resolvedAddress'].forEach(
    (measure) => (location[measure] = rawJson[measure]),
  );

  let current = {};
  [
    'conditions',
    'cloudcover',
    'datetime',
    'humidity',
    'pressure',
    'uvindex',
    'visibility',
    'windspeed',
  ].forEach(
    (measure) =>
      (current[measure] =
        rawJson.currentConditions[measure] + (units[measure] || '')),
  );

  current.date = format(rawJson.days[0].datetime, 'EEEE M/dd');
  current.description = rawJson.description;
  current.feelslike = rawJson.currentConditions.feelslike + '°';
  current.icon = getVariableVisuals(rawJson.currentConditions.icon).iconSrc;

  let precipArray = rawJson.currentConditions.preciptype;
  if (precipArray === null) {
    current.precip = 'None';
  } else {
    let precipString = precipArray
      .map((x) => x[0].toUpperCase() + x.slice(1, x.length))
      .join(', ');

    current.precip = rawJson.currentConditions.precipprob + '% chance of ';
    current.precip += precipString.toLowerCase();
  }

  current.temp = rawJson.currentConditions.temp;
  current.tempmax = rawJson.days[0].tempmax + '°';
  current.tempmin = rawJson.days[0].tempmin + '°';
  // current.tempave = rawJson.days[0].temp;

  let forecast = [];
  if (rawJson.days.length > 1) {
    rawJson.days.slice(1, rawJson.days.length).forEach((day) => {
      forecast.push({
        day: format(new Date(day.datetime), 'EEE'),
        date: format(new Date(day.datetime), 'do'),
        icon: getVariableVisuals(day.icon).iconSrc,
        tempave: day.temp + '°',
        tempmax: day.tempmax,
        tempmin: day.tempmin,
      });
    });
  }

  return { bgSrc, units, location, current, forecast };
}

function getUnits(unitGroup) {
  // measurement units, source: Visual Crossing docs
  let baseUnits = {
    cloudcover: '%',
    humidity: '%',
  };
  const usUnits = {
    temp: '°F',
    precipitation: 'in',
    snow: 'in',
    windspeed: 'mph',
    visibility: 'mi',
    pressure: 'mbar',
  };
  const metricUnits = {
    temp: '°C',
    precipitation: 'mm',
    snow: 'cm',
    windspeed: 'kph',
    visibility: 'km',
    pressure: 'mbar (hPa)',
  };

  return Object.assign(unitGroup === 'us' ? usUnits : metricUnits, baseUnits);
}

// changes the icons and backgrounds based on weather conditions
function getVariableVisuals(iconString) {
  let variableVisuals = {};

  switch (iconString) {
    case 'snow':
      variableVisuals.bgSrc = SnowBg;
      variableVisuals.iconSrc = Snow;
      break;
    case 'rain':
      variableVisuals.bgSrc = RainBg;
      variableVisuals.iconSrc = Rain;
      break;
    case 'fog':
      variableVisuals.bgSrc = FogBg;
      variableVisuals.iconSrc = Fog;
      break;
    case 'wind':
      variableVisuals.bgSrc = WindBg;
      variableVisuals.iconSrc = Wind;
      break;
    case 'cloudy':
      variableVisuals.bgSrc = CloudyBg;
      variableVisuals.iconSrc = Cloudy;
      break;
    case 'partly-cloudy-day':
      variableVisuals.bgSrc = PartlyCloudyDayBg;
      variableVisuals.iconSrc = PartlyCloudyDay;
      break;
    case 'partly-cloudy-night':
      variableVisuals.bgSrc = PartlyCloudyNightBg;
      variableVisuals.iconSrc = PartlyCloudyNight;
      break;
    case 'clear-day':
      variableVisuals.bgSrc = ClearDayBg;
      variableVisuals.iconSrc = ClearDay;
      break;
    case 'clear-night':
      variableVisuals.bgSrc = ClearNightBg;
      variableVisuals.iconSrc = ClearNight;
      break;
    default:
      throw new Error('issue with icon string');
  }

  return variableVisuals;
}

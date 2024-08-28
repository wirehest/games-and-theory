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
    'feelslike',
    'humidity',
    'precip',
    'precipprob',
    'preciptype',
    'temp',
    'pressure',
    'uvindex',
    'visibility',
    'windspeed',
  ].forEach(
    (measure) => (current[measure] = rawJson.currentConditions[measure]),
  );
  // current.conditions = rawJson.currentConditions.conditions;
  // current.cloudcover = rawJson.currentConditions.cloudcover;
  // current.datetime = rawJson.currentConditions.datetime;
  current.description = rawJson.description;
  // current.feelslike = rawJson.currentConditions.feelslike;
  // current.humidity = rawJson.currentConditions.humidity;
  current.icon = getVariableVisuals(rawJson.currentConditions.icon).iconSrc;

  // current.precip = rawJson.currentConditions.precip;
  // current.precipprob = rawJson.currentConditions.precipprob;
  // current.preciptype = rawJson.currentConditions.preciptype; // array

  // current.temp = rawJson.currentConditions.temp;
  // current.tempave = rawJson.days[0].temp;
  current.tempmax = rawJson.days[0].tempmax;
  current.tempmin = rawJson.days[0].tempmin;

  // current.pressure = rawJson.currentConditions.pressure;
  // current.uvindex = rawJson.currentConditions.uvindex;
  // current.visibility = rawJson.currentConditions.visibility;
  // current.windspeed = rawJson.currentConditions.windspeed;

  let forecast = [];
  if (rawJson.days.length > 1) {
    rawJson.days.slice(1, rawJson.days.length).forEach((day) => {
      forecast.push({
        day: format(new Date(day.datetime), 'EEE'),
        date: format(new Date(day.datetime), 'do'),
        icon: getVariableVisuals(day.icon).iconSrc,
        tempave: day.temp,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
      });
    });
  }

  return { bgSrc, units, location, current, forecast };
}

function getUnits(unitGroup) {
  // see VisualCrossing documentation
  const usUnits = {
    temp: '°F',
    precipitation: 'in',
    snow: 'in',
    wind: 'mph',
    visibility: 'mi',
    pressure: 'mbar',
    solarRadiation: 'W/m²',
    solarEnergy: 'MJ/m²',
    soilMoisture: 'in',
  };
  const metricUnits = {
    temp: '°C',
    precipitation: 'mm',
    snow: 'cm',
    wind: 'kph',
    visibility: 'km',
    pressure: 'mbar (hPa)',
    solarRadiation: 'W/m²',
    solarEnergy: 'MJ/m²',
    soilMoisture: 'mm',
  };

  return unitGroup === 'us' ? usUnits : metricUnits;
}

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

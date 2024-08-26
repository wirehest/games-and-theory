// gets data used in this app from the raw json
export function getDataFromJson(rawJson, unitGroup) {
  let location = {};
  let current = {};
  let forecast = [];
  let units = getUnits(unitGroup);

  location.searched = rawJson.address;
  location.latitude = rawJson.latitude;
  location.longitude = rawJson.longitude;
  location.timezone = rawJson.timezone;
  location.actual = rawJson.resolvedAddress;

  current.conditions = rawJson.currentConditions.conditions;
  current.cloudcover = rawJson.currentConditions.cloudcover;
  current.datetime = rawJson.currentConditions.datetime;
  current.description = rawJson.description;
  current.feelslike = rawJson.currentConditions.feelslike;
  current.humidity = rawJson.currentConditions.humidity;
  current.icon = rawJson.currentConditions.icon;

  current.precip = rawJson.currentConditions.precip;
  current.precipprob = rawJson.currentConditions.precipprob;
  current.preciptype = rawJson.currentConditions.preciptype; // array

  current.temp = rawJson.currentConditions.temp;
  // current.tempave = rawJson.days[0].temp;
  current.tempmax = rawJson.days[0].tempmax;
  current.tempmin = rawJson.days[0].tempmin;

  current.pressure = rawJson.currentConditions.pressure;
  current.uvindex = rawJson.currentConditions.uvindex;
  current.visibility = rawJson.currentConditions.visibility;
  current.windspeed = rawJson.currentConditions.windspeed;

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

  return { location, current, forecast };
}

export function getUnits(unitGroup) {
  // from https://www.visualcrossing.com/resources/documentation/weather-api/unit-groups-and-measurement-units/
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

  return usUnits ? unitGroup === 'usUnits' : metricUnits;
}

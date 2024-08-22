import './style.css';

let location = '';
let startDate = '';
let endDate = '';
let apiKey = '';
let units = '';
let endpoint = 'https://weather.visualcrossing.com/VisualCrossingWebServices/';
endpoint += `rest/services/timeline/${location}/${startDate}/${endDate}`;
endpoint += `?key=${apiKey}&unitGroup=${units}`;
endpoint += '&include=days,alerts,current,fcst';

console.log(endpoint);

// let rawData = fetch();

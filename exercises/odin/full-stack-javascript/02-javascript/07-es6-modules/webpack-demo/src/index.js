import _ from 'lodash';
import myName from './myName.js';

function component() {
  const element = document.createElement('div');
  const secondElement = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Odin continuation
  secondElement.textContent = myName('Phoebe');

  return [element, secondElement];
}

component().forEach((elem) => document.body.appendChild(elem));

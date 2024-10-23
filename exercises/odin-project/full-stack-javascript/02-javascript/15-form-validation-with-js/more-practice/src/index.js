import './style.css';
import { getCodeList } from 'country-list';
import {
  postcodeValidator,
  postcodeValidatorExistsForCountry,
} from 'postcode-validator';

let email = document.querySelector('#email');
let emailError = document.querySelector('.email-error');
let country = document.querySelector('#country');
let countryError = document.querySelector('.country-error');
let zipcode = document.querySelector('#zipcode');
let zipcodeError = document.querySelector('.zipcode-error');
let password = document.querySelector('#password');
let passwordError = document.querySelector('.password-error');
let confirm = document.querySelector('#confirm');
let confirmError = document.querySelector('.confirm-error');

makeCountryDropdown();
addListeners();

function makeCountryDropdown() {
  let countrySelect = document.querySelector('#country');
  let countries = getCodeList();
  let fragment = new DocumentFragment();

  let pleaseSelectMessage = document.createElement('option');
  pleaseSelectMessage.textContent = '-- Select country --';
  pleaseSelectMessage.value = '';
  fragment.append(pleaseSelectMessage);

  for (let [code, country] of Object.entries(countries)) {
    let option = document.createElement('option');
    option.setAttribute('value', code);
    option.textContent = country;
    fragment.append(option);
  }
  countrySelect.append(fragment);
}

function makeErrorMessages() {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter an email address.';
  } else {
    emailError.textContent = '';
  }

  if (country.value) {
    if (postcodeValidatorExistsForCountry(country.value.toUpperCase())) {
      if (postcodeValidator(zipcode.value, country.value.toUpperCase())) {
        zipcodeError.textContent = '';
      } else {
        zipcodeError.textContent = 'Invalid zipcode.';
      }
    } else if (zipcode.validity.tooShort) {
      zipcodeError.textContent = 'Zipcode is too short.';
    } else {
      zipcodeError.textContent = '';
    }
  } else if (zipcode.value) {
    zipcodeError.textContent = 'Select a country.';
  } else {
    zipcodeError.textContent = '';
  }

  if (password.validity.tooShort) {
    passwordError.textContent = 'Password is too short.';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      'Must have lower and uppercase, and special (!@#$%^&*) chars.';
  } else {
    passwordError.textContent = '';
  }

  if (confirm.value !== password.value) {
    confirmError.textContent = 'Passwords need to match.';
  } else {
    confirmError.textContent = '';
  }
}

function addListeners() {
  let form = document.querySelector('form');

  form.addEventListener('input', () => {
    console.log(password.value);
    makeErrorMessages();
  });

  // 'focusout' listener so validation happens with form progress
  form.addEventListener('focusout', () => {
    makeErrorMessages();
  });
}

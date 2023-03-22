import './css/styles.css';
import Notiflix from 'notiflix';
import * as fetchCountriesModule from './modules/fetchCountries';
const debounce = require('lodash.debounce');

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

const notiflixFailure = text => {
  Notiflix.Notify.failure(text);
};
const notiflixSuccess = text => {
  Notiflix.Notify.success(text);
};
const notiflixInfo = text => {
  Notiflix.Notify.info(text);
};

searchBox.addEventListener(
  'input',
  debounce(evt => {
    const searchBoxValue = evt.target.value;
    if (searchBoxValue === '') {
      countryList.innerHTML = '';
      return;
    }

    fetchCountriesModule.fetchCountries(searchBoxValue.trim());
  }, DEBOUNCE_DELAY)
);

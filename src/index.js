import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const searchInputRef = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfoBox = document.querySelector('.country-info');


searchInputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch() {
    const nameCountry = searchInputRef.value.trim();
     
    fetchCountries(nameCountry).then(countries => {
        if (countries.length >= 2 && countries.length <= 10) {
            addMarkupCountryList(countries);
        } else if (countries.length === 1) {
            addMarkupcountryInfoBox(countries);
        } else if (countries.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } 
    }).catch(error => {Notiflix.Notify.failure('Oops, there is no country with that name');
    clearContent()})

}


function addMarkupCountryList(countries) {
    clearContent();
    const markupCountriesList = countries.map(({name: {common}, flags}) => {
       
        return `<li class="country-item">
        <img src='${flags[0]}' class="country-item-flag" alt="Flag" width="70">
        <p class="country-item-name">${common}</p>
      </li>`
    }
    ).join('');

    
    return countriesList.innerHTML = markupCountriesList;
   
}

function addMarkupcountryInfoBox(countries) {
    clearContent();
    const markupcountryInfoBox = countries.map(({name: {official}, flags, capital, population, languages}) => {
        const language = Object.values(languages).join(', ');
        return `<div class="country-info-head">
         <img class = "country-info-flag" src="${flags[0]}" alt="Flag of Country" width="100">
         <h2 class="country-info-tittle">${official}</h2>
       
       <p class="country-info-capital"><strong>Capital: </strong>${capital}</p>
       <p class="country-info-population"><strong>Population: </strong>${population}</p>
       <p class="country-info-languages"><strong>Languages: </strong>${language}</p>
       </div>`

       
    }).join('');

    return countryInfoBox.innerHTML = markupcountryInfoBox;
}

function clearContent() {
    countriesList.innerHTML = '';
    countryInfoBox.innerHTML = '';
}



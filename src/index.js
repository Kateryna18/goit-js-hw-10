import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;

const searchInputRef = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfoBox = document.querySelector('.country-info');


searchInputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch() {
    const nameCountry = searchInputRef.value.trim();
    if (nameCountry === '') {
        countriesList.innerHTML = '';
        countryInfoBox.innerHTML = '';
    } 
    
    fetchCountries(nameCountry).then(countries => {
        if (countries.length >= 2 && countries.length <= 10) {
            addMarkupCountryList(countries);
        } else if (countries.length === 1) {
            addMarkupcountryInfoBox(countries);
        } else if (countries.length > 10) {
            alert('Too many matches found. Please enter a more specific name.')
        } 
    }).catch(error => {alert('Oops, there is no country with that name')})

}


function addMarkupCountryList(countries) {
    const markupCountriesList = countries.map(({name: {official}, flags: {svg}}) => {
        
        // const flagSvg = country.flags;
        
        return `<li class="country-item">
        <img src='${svg}' class="country-item-flag" alt="Flag" width="120">
        <p class="country-item-name">${official}</p>
      </li>`
    }
    ).join('');

    
    return countriesList.innerHTML = markupCountriesList;
   
}

function addMarkupcountryInfoBox(countries) {
    const markupcountryInfoBox = countries.map(({name: {official}, flags: {svg}, capital, population, languages}) => {
        const language = Object.values(languages).join(', ');
        return `<div class="country-info-head">
         <img class = "country-info-flag" src="${svg}" alt="Flag of Country" width="220">
         <h2 class="country-info-tittle">${official}</h2>
       </div>
       <p class="country-info-capital"><strong>Capital: </strong>${capital}</p>
       <p class="country-info-population"><strong>Population: </strong>${population}</p>
       <p class="country-info-languages"><strong>Languages: </strong>${language}</p>`

       
    }).join('');

    return countryInfoBox.innerHTML = markupcountryInfoBox;
}







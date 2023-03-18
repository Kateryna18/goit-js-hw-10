import './css/styles.css';
import debounce from 'lodash.debounce';



const DEBOUNCE_DELAY = 300;

const searchInputBox = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfoBox = document.querySelector('.country-info');

function fetchCountries(name) {
    const url = `https://restcountries.com/v3/name/${name}?fields=name,capital,population,flags,languages`;

    return fetch(url).then(response => {
        return response.json();
    });

}

searchInputBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))


function onSearch() {
    const nameCountry = this.value;
    fetchCountries(nameCountry).then(countries => {
        if(countries.length > 10) {
            alert('Too many matches found. Please enter a more specific name.')
        } else if (countries.length >= 2 && countries.length <= 10) {
            addMarkupCountryList(countries);
        } 

        // addMarkupcountryInfoBox(countries);
    }
        
        

    ).catch(error => {console.error(error)})

}



function addMarkupCountryList(countries) {
    const markupCountriesList = countries.map(country => {
        console.log(country.name.official);
        return `<li class="country-item">
        <img src='' class="country-item-flag" alt="Flag" width="30">
        <p class="country-item-name">${country.name.official}</p>
      </li>`
    }
    ).join('');

    
    return countriesList.innerHTML = markupCountriesList;

}

// function addMarkupcountryInfoBox(countries) {

// }





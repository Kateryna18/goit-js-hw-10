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
        } else if (countries.length === 1) {
            addMarkupcountryInfoBox(countries);
        }

        
    }
        
        

    ).catch(error => {console.error(error)})

}



function addMarkupCountryList(countries) {
    const markupCountriesList = countries.map(country => {
        
        const flagSvg = country.flags;
        

        return `<li class="country-item">
        <img src='${flagSvg[0]}' class="country-item-flag" alt="Flag" width="120">
        <p class="country-item-name">${country.name.official}</p>
      </li>`
    }
    ).join('');

    
    return countriesList.innerHTML = markupCountriesList;

}

function addMarkupcountryInfoBox(countries) {

const countryValue = countries[0];
console.log(countryValue)
const flagSvg = countryValue.flags;

const languages = Object.values(countryValue.languages);
console.log(languages)



const markupMarkupcountryInfoBox = `<div class="country-info-head">
        <img class = "country-info-flag" src="${flagSvg[0]}" alt="Flag of Country" width="220">
        <h2 class="country-info-tittle">${countryValue.name.official}</h2>
      </div>
      <p class="country-info-capital"><strong>Capital: </strong>${countryValue.capital}</p>
      <p class="country-info-population"><strong>Population: </strong>${countryValue.population}</p>
      <p class="country-info-languages"><strong>Languages: </strong>${languages[0]}, ${languages[1]}</p>`
            
      
    return countryInfoBox.innerHTML = markupMarkupcountryInfoBox; 
}





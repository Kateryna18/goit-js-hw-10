import './css/styles.css';
import debounce from 'lodash.debounce';



const DEBOUNCE_DELAY = 300;

// 1. Напиши функцію fetchCountries(name), яка робить HTTP-запит на ресурс name 
// і повертає проміс з масивом країн - результатом запиту. 
// 2. Винеси її в окремий файл fetchCountries.js і зроби іменований експорт.

const searchInputBox = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfoBox = document.querySelector('.country-info');

function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`).then(response => {
        return response.json();
    });

}

searchInputBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))

// 1. Якщо користувач повністю очищає поле пошуку, то HTTP-запит не виконується, а розмітка списку країн 
// або інформації про країну зникає.

// 2. Виконай санітизацію введеного рядка методом trim(), це вирішить проблему, коли в полі введення тільки пробіли, 
// або вони є на початку і в кінці рядка.
function onSearch() {
    const nameCountry = this.value;
    fetchCountries(nameCountry).then(countries => {
        console.log(countries);
        if(countries.length > 10) {
            alert('Too many matches found. Please enter a more specific name.')
        } else if (countries.length > 2 || countries.length < 10) {
            addMarkupCountryList(countries);
        } 

        addMarkupcountryInfoBox(countries);

    }).catch(error => {console.log(error)})

}

function addMarkupCountryList(countries) {

}

function addMarkupcountryInfoBox(countries) {

}


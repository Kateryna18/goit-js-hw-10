import debounce from 'lodash.debounce';

const API_URL = 'https://restcountries.com/v3.1/name/';

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function fetchCountries(name) {
  return fetch(`${API_URL}${name}?fields=name.official,capital,population,flags.svg,languages`)
    .then(response => {
      return response.json();
    });
}

function renderCountryList(countries) {
  refs.countryList.innerHTML = '';
  if (countries.length >= 2 && countries.length <= 10) {
    const listItems = countries.map(country => {
      const { name: { official }, flags: { svg } } = country;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${svg}" alt="${official} flag" width="30" height="20">
        <span>${official}</span>
      `;
      return listItem;
    });
    refs.countryList.append(...listItems);
  } else if (countries.length === 1) {
    renderCountryInfo(countries[0]);
  } else if (countries.length > 10) {
    alert('Too many matches found. Please enter a more specific name.');
  }
}

function renderCountryInfo(country) {
  const { name: { official }, flags: { svg }, capital, population, languages } = country;
  const languagesList = languages.map(lang => lang.name).join(', ');
  const countryInfo = `
    <div class="country-info__flag">
      <img src="${svg}" alt="${official} flag">
    </div>
    <div class="country-info__details">
      <h2 class="country-info__name">${official}</h2>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Languages:</strong> ${languagesList}</p>
    </div>
  `;
  refs.countryInfo.innerHTML = countryInfo;
}

function onSearchInput() {
  const query = refs.searchBox.value.trim();
  if (!query) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(query)
    .then(countries => renderCountryList(countries))
    .catch(error => console.error(error));
}

refs.searchBox.addEventListener('input', debounce(onSearchInput, 300));

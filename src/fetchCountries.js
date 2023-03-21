export default function fetchCountries(name) {
    const url = `https://restcountries.com/v3/name/${name}?fields=name,capital,population,flags,languages`;

    return fetch(url).then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });

}
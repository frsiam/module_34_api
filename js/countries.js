const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    // for(const country of countries){
    //     console.log(country.name.common);
    // }
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        console.log(country.name.common);
        const h3 = document.createElement('h3')
        h3.innerText = country.name.common
        countryDiv.appendChild(h3)
    })
}
loadCountries()
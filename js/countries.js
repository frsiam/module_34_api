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
        console.log(country.capital);
        const div = document.createElement('div')
        div.classList.add('country')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        h3.innerText = country.name.common
        p.innerText = country.capital
        div.appendChild(h3)
        div.appendChild(p)
        countryDiv.appendChild(div)
    })
}
loadCountries() 
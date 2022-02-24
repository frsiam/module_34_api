const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country.capital);
        const div = document.createElement('div')
        div.classList.add('country')

        div.innerHTML = `<h3>Name : ${country.name.common}</h3>
        <p>Capital : ${country.capital}</p>
        <button class="btn btn-success" onclick="countryByName('${country.name.common}')">Details</button>`

        countryDiv.appendChild(div)
    })
}
const countryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country)
    const detailDiv = document.getElementById('country-detail')
    detailDiv.classList.add('py-3')
    detailDiv.innerHTML = `<h4>Name : ${country.name.common}</h4>
    <h6>Continents: ${country.continents}</h6>
    <p>Population : ${country.population}</p>
    <p>Population : ${country.languages.cnr}</p>
    <img src="${country.flags.png}">`
}




loadCountries() 
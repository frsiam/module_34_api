const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText)

    searchField.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    console.log(meals)
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
    })
}
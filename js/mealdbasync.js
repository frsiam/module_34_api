const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    //Clear data
    searchField.value = ''

    const p1 = document.createElement('p')
    if(searchText == ''){
        p1.innerText = 'Please write something'
        alerDiv.appendChild(p1)
    }
    else{
        p1.innerText = ''
        alerDiv.appendChild(p1) 
        //load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        
        const res = await fetch(url)
        const data = await res.json()
        displaySearchResult(data.meals)
        
        /* fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals)) */
           
    }
    
}
const alerDiv = document.getElementById('newalert')
const displaySearchResult = meals => {
    console.log(meals)
    if(meals == null){
        const p = document.createElement('p')
        p.innerText = 'Not Found'
        alerDiv.appendChild(p)
    }
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal.idMeal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" data-bs-target="#staticBackdrop" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div)
    })
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    
    /* fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0])) */
}

const displayMealDetail = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}
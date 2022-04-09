document.querySelector('button').addEventListener('click', searchCocktail)

function searchCocktail() {
    const cocktail = document.querySelector('input').value;

    resetDOM();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(res => res.json())
        .then(data => {
            const drinks = data.drinks;

            drinks.forEach(drink => {
                console.log(drink)
                addToDOM(drink)
            });
        })
        .catch(err => {
            console.log(err);
        })
}

function resetDOM() {
    const cocktails = document.getElementById('cocktails');

    while (cocktails.firstChild) {
        cocktails.removeChild(cocktails.firstChild)
    }
}

function addToDOM(drink) {
    const section = document.createElement('section');
    section.classList.add('cocktail')

    section.innerHTML = `
        <h2>${drink.strDrink}</h2>
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink} cocktail"></img>

        <div>
            <h3>Ingredients:</h3>
            <ul id="ingredients">${listIngredients(drink)}</ul>
            <h3>Instructions:</h3>
            <p>${drink.strInstructions}</p>
        </div> 
    `;
    
    document.getElementById('cocktails').appendChild(section)
}

function listIngredients(drink) {
    let str = '';

    for (const [key, value] of Object.entries(drink)) {
        if(key.includes('strIngredient') && value) {
            str += `<li>${value}</li>\n`
        }
    }

    return str;
}
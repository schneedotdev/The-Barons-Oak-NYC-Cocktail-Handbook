//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', searchCocktail)

function searchCocktail() {
    const cocktail = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(res => res.json())
        .then(data => {
            const drinks = data.drinks;
            console.log(drinks);

            
            drinks.forEach(drink => {
                console.log(drink)
                addToDOM(drink)
            });
        })
        .catch(err => {
            console.log(err);
        })
}

function addToDOM(drink) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>${drink.strDrink}</h2>
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink} cocktail"></img>
        <h3>Ingredients<h3>
        <h3>Instructions:</h3>
        <p>${drink.strInstructions}</p>
    `;
    
    document.getElementById('cocktails').appendChild(section);
}
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', searchCocktail)

function searchCocktail() {
    const cocktail = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks);
            // const drink = data.drinks[0];
            // document.querySelector('h2').innerText = drink.strDrink;
            // document.querySelector('img').src = drink.strDrinkThumb;
            // document.querySelector('h3').innerText = drink.strInstructions;


        })
        .catch(err => {
            console.log(err);
        })
}

function addToDOM(drink) {
    const cocktails = document.querySelector('cocktails');

    const section = document.createElement('section');

    section.innerHTML = `
        <h2></h2>
        <img></img>
        <h3>Ingredients<h3>
        <ul></ul>
        <h3>Instructions:</h3>
        <p></p>
    `;
    
    document.getElementById('cocktails').appendChild(section);
}
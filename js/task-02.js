const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsData = document.querySelector('#ingredients');

const ingredientsContainerElements = ingredients => {
    return ingredients.map(ingredient => {
        const ingredientsElement = document.createElement('li');
        ingredientsElement.textContent = ingredient;
        ingredientsElement.classList.add('item');

        return ingredientsElement;
    });
};

const elements = ingredientsContainerElements(ingredients);
ingredientsData.append(...elements);
console.log(elements);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);
const listIngredients = ingredients.map(ingredient => {
  const newIngredient = document.createElement(`li`);
  newIngredient.textContent = ingredient;
  newIngredient.classList.add(`item`);

  console.log(newIngredient);
}).join(``); 

list.append(listIngredients);
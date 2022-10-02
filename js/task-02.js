const ingredientsRef = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector(`#ingredients`);
const listIngredientsRef = ingredientsRef.map(ingredient => {
  const newIngredientRef = document.createElement(`li`);
  newIngredientRef.textContent = ingredient;
  newIngredientRef.classList.add(`item`);

  console.log(newIngredientRef);
}).join(``); 

listRef.append(listIngredientsRef);
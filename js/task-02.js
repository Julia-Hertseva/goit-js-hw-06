const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector(`#ingredients`);
const listIngredientsRef = ingredients.map(ingredient => {
  const newIngredientRef = document.createElement(`li`);
  newIngredientRef.textContent = ingredient;
  newIngredientRef.classList.add(`item`);

  console.log(newIngredientRef);
  return newIngredientRef;
}); 

listRef.append(...listIngredientsRef);

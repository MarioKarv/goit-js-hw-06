const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients')


const elements = ingredients.map((ingredient) => {
  const itemOfUl = document.createElement("li");
  itemOfUl.classList.add("item");
  itemOfUl.textContent = ingredient;

  return itemOfUl;
});


listOfIngredients.append(...elements);

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   const itemOfUl = document.createElement("li");
//   itemOfUl.classList.add("item");
//   itemOfUl.textContent = ingredient;
  
//   elements.push(itemOfUl);
// }  
  
// console.log(elements)

// listOfIngredients.append(...elements)



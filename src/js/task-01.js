const itemsOfCategory = document.querySelectorAll('.item')
console.log('Number of categories:' + ' ' + itemsOfCategory.length)

const items = [...itemsOfCategory].map((item) => {
  console.log("Category: " + item.firstElementChild.textContent);
  console.log("Elements: " + item.lastElementChild.children.length);
});

// for (let i = 0; i < itemsOfCategory.length; i += 1) {
//     const category = itemsOfCategory[i].firstElementChild.textContent;
//     const elements = itemsOfCategory[i].lastElementChild.children.length;
//     console.log('Category: ' + category)
//     console.log('Elements: ' + elements)   
// }
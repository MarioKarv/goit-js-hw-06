const changeColorButton = document.querySelector(".change-color");
const itemWhoChangeColor = document.querySelector(".color");
const body = document.querySelector("body")

changeColorButton.addEventListener("click", changeColorFunction);
 
function changeColorFunction(event) {
  event.preventDefault();
  body.style.backgroundColor = itemWhoChangeColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


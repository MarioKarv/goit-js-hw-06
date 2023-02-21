const amountInput = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector("[data-destroy]");
const parentDiv = document.querySelector("#boxes");


createBtn.addEventListener("click", () => {
  if (
    Number(amountInput.value.trim()) > Number(amountInput.max) ||
    Number(amountInput.value.trim()) < Number(amountInput.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(amountInput.value.trim());
  }
  amountInput.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  amountInput.value = "";
  parentDiv.innerHTML = "";
}


function createBoxes(amount) {
  let size = 20;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  parentDiv.insertAdjacentHTML("beforeend", boxesArr.join(""));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

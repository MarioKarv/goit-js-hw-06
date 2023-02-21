const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", decrBtnHandler);
incrementBtn.addEventListener("click", incrBtnHandler);

function decrBtnHandler() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function incrBtnHandler() {
  counterValue += 1;
  value.textContent = counterValue;
}

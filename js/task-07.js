const lengthInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

lengthInput.addEventListener("input", () => {
  text.style.fontSize = `${lengthInput.value}px`;
});

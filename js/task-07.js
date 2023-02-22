const lengthInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${lengthInput.value}px`;

lengthInput.addEventListener("input", () => {
  text.style.fontSize = `${lengthInput.value}px`;
});

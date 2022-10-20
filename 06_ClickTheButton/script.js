// Caching the DOM 
const button = document.getElementById("buttonClick");
const display = document.getElementById("counter");

let count = 0;

button.addEventListener("click", () => {
  display.textContent = ++count;
})
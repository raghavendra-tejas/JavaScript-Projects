// DOM Caching
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const numberDisplay = document.getElementById("number");

let x = 0;

// Subtracting
minus.addEventListener("click", () => {
  numberDisplay.textContent = --x;
})

// Adding
plus.addEventListener("click", () => {
  numberDisplay.textContent = ++x;
})
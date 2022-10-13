// Random hex-code generation and concatenation with hash (#)
function randomColors() {
  let alphaNumericNumbers = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash = hash + alphaNumericNumbers[Math.floor(Math.random() * 16)];
  }
  return hash;
}

// Canvas background color is linked with hexcode for random color generation
function changeRandomColor() {
  document.getElementById("canvas").style.backgroundColor = randomColors();
}

// Button on clicking changes the random color on canvas
let btn = document.getElementById("button");
btn.addEventListener("click", changeRandomColor)
// caching the DOM
const playerScoreVal_span = document.getElementById("userScoreVal");
const computerScoreVal_span = document.getElementById("compScoreVal");

const playerChoiceDisplay = document.getElementById("result-user-stat");
const computerChoiceDisplay = document.getElementById("result-comp-stat");
const roundWinnerDisplay = document.getElementById("result-final-stat");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");


let playerInput = "";
let computerInput = "";


let playerScoreCount = 0;
let computerScoreCount = 0;

// Player Selection
const selection = {
  rock: "Rock",
  paper: "Paper",
  scissor: "Scissor"
}

const setPlayerChoice = (playerClick) => {
  playerChoiceDisplay.textContent ="User: " + selection[playerClick];
  playerInput = playerClick;
}

rockButton.addEventListener("click", (e) => {
  setPlayerChoice(e.currentTarget.id);
  getComputerChoice();
  finalWinner();
  playerScoreVal_span.textContent = playerScoreCount;
  computerScoreVal_span.textContent = computerScoreCount;
})
paperButton.addEventListener("click", (e) => {
  setPlayerChoice(e.currentTarget.id);
  getComputerChoice();
  finalWinner();
  playerScoreVal_span.textContent = playerScoreCount;
  computerScoreVal_span.textContent = computerScoreCount;
})
scissorButton.addEventListener("click", (e) => {
  setPlayerChoice(e.currentTarget.id);
  getComputerChoice();
  finalWinner();
  playerScoreVal_span.textContent = playerScoreCount;
  computerScoreVal_span.textContent = computerScoreCount;
})




// Computer Selection

function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoiceDisplay.textContent = "Computer: " + computerChoice[randomNumber];
  computerInput = randomNumber;
}




// Final Winner

const finalWinner = () => {
  if (playerInput === computerInput) {
    roundWinnerDisplay.textContent = "Winner: " + "Tie";
    return;
  }

  // Player => Rock
  if (playerInput === "rock") {
    if (computerInput === "scissor") {
      roundWinnerDisplay.textContent = "Winner: " + "You Win";
      playerScoreCount = playerScoreCount + 1;
    } else {
      roundWinnerDisplay.textContent = "Winner: " + "You Loose";
      computerScoreCount = computerScoreCount + 1;
    }
    return;
  }

  // Player => Paper
  if (playerInput === "paper") {
    if (computerInput === "rock") {
      roundWinnerDisplay.textContent = "Winner: " + "You Win";
      playerScoreCount = playerScoreCount + 1;
    } else {
      roundWinnerDisplay.textContent = "Winner: " + "You Loose";
      computerScoreCount = computerScoreCount + 1;
    }
    return;
  }

  // Player => Scissor
  if (playerInput === "scissor") {
    if (computerInput === "paper") {
      roundWinnerDisplay.textContent = "Winner: " + "You Win";
      playerScoreCount = playerScoreCount + 1;
    } else {
      roundWinnerDisplay.textContent = "Winner: " + "You Loose";
      computerScoreCount = computerScoreCount + 1;
    }
    return;
  }
};
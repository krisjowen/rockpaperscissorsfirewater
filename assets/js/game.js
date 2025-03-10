let game = {
  playerScore: 0,
  computerScore: 0,
  turnInProgress: false,
  choices: ["rock", "paper", "scissors", "fire", "water"],
};

let defaultPlayerColor;
let defaultComputerColor;

window.addEventListener("load", startup, false);

// Sets icons colours according to defaults in html file
function startup() {
  defaultPlayerColor = document.getElementById("playerIconColor").value;
  defaultComputerColor = document.getElementById("computerIconColor").value;
  let playerIconColor = document.getElementById("playerIconColor");
  playerIconColor.value = defaultPlayerColor;
  playerIconColor.addEventListener("input", updatePlayerColor, false);
  let computerIconColor = document.getElementById("computerIconColor");
  computerIconColor.value = defaultComputerColor;
  computerIconColor.addEventListener("input", updateComputerColor, false);
  applyDefaultColor();
}

function applyDefaultColor() {
  let playersIcon = document.querySelectorAll(".playerIcon");
  playersIcon.forEach((p) => {
    p.style.color = defaultPlayerColor;
  });
  let computerIcon = document.querySelectorAll(".computerIcon");
  computerIcon.forEach((p) => {
    p.style.color = defaultComputerColor;
  });
}

// Updates player icon colours from icon colours modal input
function updatePlayerColor(event) {
  const playersIcon = document.querySelectorAll(".playerIcon");
  playersIcon.forEach((p) => {
    p.style.color = event.target.value;
  });
}

// Updates computer icon colours from icon colours modal input
function updateComputerColor(event) {
  const computerIcon = document.querySelectorAll(".computerIcon");
  computerIcon.forEach((x) => {
    x.style.color = event.target.value;
  });
}

// Function to update displayed scores
function updateScores() {
  document.getElementById("playerScore").innerText = game.playerScore;
  document.getElementById("computerScore").innerText = game.computerScore;
}

// Initialise score display
const divs = document.querySelectorAll(".playerInput");

// Highlight player icon with mouse over
for (let div of divs) {
  div.addEventListener("mouseenter", (event) => {
    event.currentTarget.classList.add("fa-beat");
  });
  div.addEventListener("mouseleave", (event) => {
    event.currentTarget.classList.remove("fa-beat");
  });
}

// Event listener to log player icon selection
for (let div of divs) {
  div.addEventListener("click", (event) => {
    if (game.turnInProgress) return; // Prevent clicks while a turn is in progress
    game.turnInProgress = true; // Set to true at the start of a turn
    let playerMove = event.target.id.replace("player", "").toLowerCase();
    document.getElementById("playerScoreLabel").innerText =
      "You chose " + playerMove;
    let computerMoveResult = computerMove();
    outcome(playerMove, computerMoveResult);
  });
}

// Generate computer move with random selection from game choices array
function computerMove() {
  let move = game.choices[Math.floor(Math.random() * game.choices.length)];
  document.getElementById("computerScoreLabel").innerText =
    "Computer chose " + move;
  return move;
}

// Calculates outcome of each round and updates stored scores
function outcome(playerMove, computerMove) {
  let playerColor = document.getElementById("playerIconColor").value;
  let computerColor = document.getElementById("computerIconColor").value;
  let result = "";

  if (playerMove === computerMove) {
    result = "tie";
  } else if (
    (playerMove === "rock" &&
      (computerMove === "scissors" || computerMove === "water")) ||
    (playerMove === "paper" &&
      (computerMove === "rock" || computerMove === "water")) ||
    (playerMove === "scissors" &&
      (computerMove === "paper" || computerMove === "water")) ||
    (playerMove === "fire" && computerMove !== "water") ||
    (playerMove === "water" && computerMove === "fire")
  ) {
    result = "playerWin";
    game.playerScore++;
  } else {
    result = "computerWin";
    game.computerScore++;
  }

  // Display result
  if (result === "playerWin") {
    document.getElementById("outcome").innerText = "You win!";
    document.getElementById("outcome").style.color = playerColor;
  } else if (result === "computerWin") {
    document.getElementById("outcome").innerText = "Computer wins!";
    document.getElementById("outcome").style.color = computerColor;
  } else {
    document.getElementById("outcome").innerText = "It's a draw";
    document.getElementById("outcome").style.color = "#000000";
  }

  // Update score display
  updateScores();

  game.turnInProgress = false;
  return result;
}

// Resets both player scores
function newGame() {
  game.playerScore = 0;
  game.computerScore = 0;
  document.getElementById("playerScoreLabel").innerText = "Player score";
  document.getElementById("computerScoreLabel").innerText = "Computer score";
  document.getElementById("outcome").innerText = "";
  updateScores();
}

if (typeof module === "object") {
  module.exports = {
    game,
    startup,
    applyDefaultColor,
    updatePlayerColor,
    updateComputerColor,
    updateScores,
    computerMove,
    outcome,
    newGame,
  };
}

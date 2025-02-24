let game = {
  playerScore: 0,
  computerScore: 0,
  turnInProgress: false,
  choices: ["rock", "paper", "scissors", "fire", "water"],
};

// Function to update displayed scores
function updateScores() {
  document.getElementById("playerScore").innerText = game.playerScore;
  document.getElementById("computerScore").innerText = game.computerScore;
}

// Initialize score display
updateScores();
const divs = document.querySelectorAll(".playerInput");

divs.forEach((div) => {
  div.addEventListener("click", (event) => {
    console.log("Player Move:", event.target.id);
    let playerMove = event.target.id;
    let computerMoveResult = computerMove();
    outcome(playerMove, computerMoveResult);
  });
});


function computerMove() {
  let move = game.choices[Math.floor(Math.random() * game.choices.length)];
  console.log("Computer Move:", move);
  return move;
}

function outcome(playerMove, computerMove) {
  let result = "";

  if (playerMove === computerMove) {
    result = "tie";
  } else if (
    (playerMove === "rock" && (computerMove === "scissors" || computerMove === "fire")) ||
    (playerMove === "paper" && (computerMove === "rock" || computerMove === "water")) ||
    (playerMove === "scissors" && (computerMove === "paper" || computerMove === "water")) ||
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
  console.log(result);

  // Update score display
  updateScores();
}

function newGame() {
  game.playerScore = 0;
  game.computerScore = 0;
  updateScores();
}

if (typeof module === "object") {
  module.exports = { game, newGame };
}

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

for (let div of divs) {
div.addEventListener("mouseenter", (event) => {
  event.target.style.color = 'white';
  event.target.style.backgroundColor = 'navy';
}
)
div.addEventListener("mouseleave", (event) => {
  event.target.style.color = '';
  event.target.style.backgroundColor = '';
})
};


for (let div of divs) {
  div.addEventListener("click", (event) => {
    if (game.turnInProgress) return; // Prevent clicks while a turn is in progress
    game.turnInProgress = true; // Set to true at the start of a turn
    console.log("Player Move:", event.target.id);
    let playerMove = event.target.id;
    document.getElementById("playerScoreLabel").innerText = "You chose " + playerMove;
    let computerMoveResult = computerMove();
    outcome(playerMove, computerMoveResult);
  });
};


function computerMove() {
  let move = game.choices[Math.floor(Math.random() * game.choices.length)];
  document.getElementById("computerScoreLabel").innerText = "Computer chose " + move;
  console.log("Computer Move:", move);
  return move;
}

function outcome(playerMove, computerMove) {
  let result = "";

  if (playerMove === computerMove) {
    result = "tie";
  } else if (
    (playerMove === "rock" && (computerMove === "scissors" || computerMove === "water")) ||
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
  if (result === "playerWin") {
  document.getElementById("outcome").innerText = "You win!"
  } else if (result === "computerWin") {
    document.getElementById("outcome").innerText = "Computer wins!"
  } else {
    document.getElementById("outcome").innerText = "It's a draw"
  }
  // Update score display
  updateScores();

  game.turnInProgress = false;
}

function newGame() {
  game.playerScore = 0;
  game.computerScore = 0;
  document.getElementById("playerScoreLabel").innerText = "Player score";
  document.getElementById("computerScoreLabel").innerText = "Computer score";
  updateScores();
}

if (typeof module === "object") {
  module.exports = { game, newGame };
}

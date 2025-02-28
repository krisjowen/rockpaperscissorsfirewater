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


// Highlight player icon with mouse over
for (let div of divs) {
div.addEventListener("mouseenter", (event) => {
  event.target.style.color = 'white';
  event.target.style.backgroundColor = "rgb(104, 103, 172)";
}
)
div.addEventListener("mouseleave", (event) => {
  event.target.style.color = '';
  event.target.style.backgroundColor = '';
})
};

// Event listener to log player icon selection
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

// Generate computer move with random selection from game choices array
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
  document.getElementById("outcome").style.color = "rgb(104, 103, 172)"
  } else if (result === "computerWin") {
    document.getElementById("outcome").innerText = "Computer wins!"
    document.getElementById("outcome").style.color = "rgb(206, 123, 176)"
  } else {
    document.getElementById("outcome").innerText = "It's a draw"
    document.getElementById("outcome").style.color = "black"
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
  document.getElementById("outcome").innerText = "";
  updateScores();
}

if (typeof module === "object") {
  module.exports = { game, newGame };
}

let game = {
  playerScore: 0,
  computerScore: 0,
  turnInProgress: false,
  choices: ["rock", "paper", "scissors", "fire", "water"],
};

let playerIconColor;
const defaultPlayerColor = "rgb(104, 103, 172)";
const defaultComputerColor = "rgb(204, 153, 10)";

window.addEventListener("load", startup, false);;

function startup() {
  playerIconColor = document.getElementById("playerIconColor");
  playerIconColor.value = defaultPlayerColor;
  playerIconColor.addEventListener("input", updatePlayerColor, false);
  computerIconColor = document.getElementById("computerIconColor");
  computerIconColor.value = defaultComputerColor;
  computerIconColor.addEventListener("input", updateComputerColor, false);

  applyDefaultColor();
}

function applyDefaultColor() {
  let playersIcon = document.querySelectorAll(".playerIcon");
  playersIcon.forEach(p => {
    p.style.color = defaultPlayerColor;
  })
    let computerIcon = document.querySelectorAll(".computerIcon");
    computerIcon.forEach(p => {
      p.style.color = defaultComputerColor;
  })
}

function updatePlayerColor(event) {
  const playersIcon = document.querySelectorAll(".playerIcon");
  playersIcon.forEach(p => {
    p.style.color = event.target.value;
  });
}

function updateComputerColor(event) {
  const computerIcon = document.querySelectorAll(".computerIcon");
  computerIcon.forEach(x => {
    x.style.color = event.target.value;
  });
}



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
  document.getElementById("outcome").innerText = "You win!";
  document.getElementById("outcome").style.color = document.getElementById("playerIconColor").value;
  } else if (result === "computerWin") {
    document.getElementById("outcome").innerText = "Computer wins!";
    document.getElementById("outcome").style.color = document.getElementById("computerIconColor").value;
  } else {
    document.getElementById("outcome").innerText = "It's a draw";
    document.getElementById("outcome").style.color = "black";
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

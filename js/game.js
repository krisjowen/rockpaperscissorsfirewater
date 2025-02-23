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
    console.log("Player Move:", event.srcElement.id);
    let playerMove = event.srcElement.id;
    let computerMoveResult = computerMove();
    outcome(playerMove, computerMoveResult);
  });
});

function computerMove() {
  let move = game.choices[Math.floor(Math.random() * 5)];
  console.log("Computer Move:", move);
  return move;
}

function outcome(playerMove, computerMove) {
  let result = "";

  if (playerMove == computerMove) {
    result = "tie";

    // playerMove is rock
  } else if (playerMove == "rock") {
    if (computerMove == "scissors" || computerMove == "water") {
      result = "playerWin";
      game.playerScore++;
    } else {
      result = "computerWin";
      game.computerScore++;
    }
  }
  // playerMove is paper
  else if (playerMove == "paper") {
    if (computerMove == "rock" || computerMove == "water") {
      result = "playerWin";
      game.playerScore++;
    } else {
      result = "computerWin";
      game.computerScore++;
    }
  }

  //playerMove is scissors
  else if (playerMove == "scissors") {
    if (computerMove == "paper" || computerMove == "water") {
      result = "playerWin";
      game.playerScore++;
    } else {
      result = "computerWin";
      game.computerScore++;
    }
  }

  //playerMove is fire
  else if (playerMove == "fire") {
    if (computerMove == "water") {
      result = "computerWin";
      game.computerScore++;
    } else {
      result = "playerWin";
      game.playerScore++;
    }
  }

  //playerMove is water
  else if (playerMove == "water") {
    if (computerMove == "fire") {
      result = "playerWin";
      game.playerScore++;
    } else {
      result = "computerWin";
      game.computerScore++;
    }
  }

  // Display result
  console.log(result);

  // Update score display
  updateScores();
}

function newGame() {
  game.playerScore = 0;
  game.computerScore = 0;
}

if (typeof module === "object") {
  module.exports = { game, newGame };
}

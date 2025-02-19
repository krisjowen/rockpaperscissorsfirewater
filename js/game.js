let game = {
    playerScore: 0,
    computerScore: 0,
    turnInProgress: false,
};

function newGame() {
    game.playerScore = 0;
    game.computerScore = 0;
    showScore();
};

function outcome(playerMove, computerMove) {
    if (playerMove = "rock") {
        if (computerMove == "scissors" || computerMove == "water") {
            outcome = "playerWin";
            playerScore++;
        } else if (computerMove == "paper" || computerMove == "fire") {
            outcome = "computerWin";
            computerScore++;
        } else {
            outcome = "tie";
        };
    };
};

function showScore() {
    document.getElementById("playerScore").innerText = game.playerScore;
    document.getElementById("computerScore").innerText = game.computerScore;
};

if (typeof module === 'object') {
module.exports = { game, newGame };
};
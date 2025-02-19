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

function showScore() {
    document.getElementById("playerScore").innerText = game.playerScore;
    document.getElementById("computerScore").innerText = game.computerScore;
};

function outcome(playerMove, computerMove) {

}

if (typeof module === 'object') {
module.exports = { game, newGame };
};
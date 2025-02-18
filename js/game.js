let game = {
    playerScore: 0,
    computerScore: 0,
    turnInProgress: false,
};

function newGame() {
    game.playerScore = 0;
    game.computerScore = 0;
};

if (typeof module === 'object') {
module.exports = { game, newGame };
};
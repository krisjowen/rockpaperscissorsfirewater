let game = {
    playerScore: 0,
    computerScore: 0,
    turnInProgress: false,
};

const divs = document.querySelectorAll('.playerInput');

divs.forEach((div) => {
    div.addEventListener('click', (event) => {
         console.dir(event.srcElement.id);
         return event.srcElement.id;
    });
});
  

function newGame() {
    game.playerScore = 0;
    game.computerScore = 0;
    document.getElementById("playerScore").innerText = game.playerScore;
    document.getElementById("computerScore").innerText = game.computerScore;
};



/* function outcome(playerMove, computerMove) {
    if (playerMove = "rock") {
        if (computerMove == "scissors" || computerMove == "water") {
            result = "playerWin";
            playerScore++;
        } else if (computerMove == "paper" || computerMove == "fire") {
            result = "computerWin";
            computerScore++;
        } else {
            result = "tie";
        };
    } else if (playerMove = "paper") {
        if (computerMove == "rock" || computerMove == "water") {
            result = "playerWin";
            playerScore++
        }
    }
};

function showScore() {
    document.getElementById("playerScore").innerText = game.playerScore;
    document.getElementById("computerScore").innerText = game.computerScore;
};

*/

if (typeof module === 'object') {
module.exports = { game, newGame };
};
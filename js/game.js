let game = {
    playerScore: 0,
    computerScore: 0,
    turnInProgress: false,
    choices: ["rock", "paper", "scissors", "fire", "water"]
};

document.getElementById("playerScore").innerText = game.playerScore;
document.getElementById("computerScore").innerText = game.computerScore;

const divs = document.querySelectorAll('.playerInput');



divs.forEach((div) => {
    div.addEventListener('click', (event) => {
         console.log("Player Move:", event.srcElement.id);
         computerMove();
         let playerMove = event.srcElement.id;
         return playerMove;
    });
});

function computerMove() {
    console.log("Computer Move:", game.choices[(Math.floor(Math.random() * 5))]);
    outcome();
    return game.choices[(Math.floor(Math.random() * 5))];
};

function outcome() {
    let a = playerMove;
    let b = computerMove();

    if (a == "rock") {
        if (b == "scissors" || b == "water") {
            result = "playerWin";
            game.playerScore++;
        } else if (computerMove == "paper" || computerMove == "fire") {
            result = "computerWin";
            game.computerScore++;
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

function newGame() {
    game.playerScore = 0;
    game.computerScore = 0;
};

if (typeof module === 'object') {
module.exports = { game, newGame };
};
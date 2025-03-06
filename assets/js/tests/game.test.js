/**
 * @jest-environment jsdom
 */
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const { game, startup, applyDefaultColor, updatePlayerColor, updateComputerColor, updateScores, computerMove, outcome, newGame} = require("../game");
const { rootCertificates } = require("tls");

jest.spyOn(window, "alert").mockImplementation(() => { });

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    updateScores();
})

describe ("game object contains correct keys", () => {
    test("playerScore key exists", () => {
        expect("playerScore" in game).toBe(true);
    });
    test("computerScore key exists", () => {
        expect("computerScore" in game).toBe(true);
    });
    test("turnInProgress key exists", () => {
        expect("turnInProgress" in game).toBe(true);
    });
});

describe ("new game button works correctly", () => {
    beforeAll (() => {
        game.playerScore = 10;
        game.computerScore = 12;
        document.getElementById("playerScore").innerText = "10";
        document.getElementById("computerScore").innerText = "12";
        newGame();
    });
    test("newGame button resets playerScore", () => {
        expect(game.playerScore).toEqual(0);
    });
    test("newGame button resets computerScore", () => {
        expect(game.computerScore).toEqual(0);
    });
});

describe("computerMove function", () => {
    test("computerMove returns a valid choice", () => {
        const choice = computerMove();
        expect(game.choices).toContain(choice);
    });
});

describe("game outcomes work correctly", () => {
    test.each([
        ["rock", "scissors", "playerWin"],
        ["scissors", "paper", "playerWin"],
        ["paper", "rock", "playerWin"],
        ["rock", "rock", "tie"],
        ["rock", "paper", "computerWin"],
        ["fire", "rock", "playerWin"],
        ["water", "fire", "playerWin"],
        ["fire", "water", "computerWin"],
        // Add more test cases here
    ])("%s beats %s and returns %s", (playerMove, computerMove, expectedResult) => {
        const result = outcome(playerMove, computerMove);
        expect(result).toBe(expectedResult);
    });
});

describe("scores increase with winning turn", () => {
    test("player beats computer so score increases", () => {
        game.playerScore = 0;
        game.computerScore = 0;
        outcome("rock", "scissors");
        expect(game.playerScore).toBe(1);
        expect(game.computerScore).toBe(0);
    });

    test("computer beats player so score increases", () => {
        game.playerScore = 0;
        game.computerScore = 0;
        outcome("scissors", "rock");
        expect(game.playerScore).toBe(0);
        expect(game.computerScore).toBe(1);
    });

    test("scores do not increase on tie", () => {
        game.playerScore = 0;
        game.computerScore = 0;
        outcome("rock", "rock");
        expect(game.playerScore).toBe(0);
        expect(game.computerScore).toBe(0);
    });
});
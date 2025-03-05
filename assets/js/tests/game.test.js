/**
 * @jest-environment jsdom
 */
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const { game, startup, applyDefaultColor, updatePlayerColor, updateComputerColor, updateScores, computerMove, outcome, newGame} = require("../game");

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

describe("player move click events", () => {
    test("rock click triggers outcome with 'rock'", () => {
        const outcomeSpy = jest.spyOn({outcome}, "outcome").mockImplementation(() => {});
        document.getElementById("playerRock").click();
        expect(outcomeSpy).toHaveBeenCalledWith("rock", expect.any(String));
        outcomeSpy.mockRestore();
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

describe ("scores increase with winning turn", () => {

})
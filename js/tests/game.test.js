/**
 * @jest-environment jsdom
 */
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const { game, newGame} = require("../game");

jest.spyOn(window, "alert").mockImplementation(() => { });

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
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

describe ("player move registered", () => {
    test("rock selection is returned", () => {
        expect()
    })
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

describe ("game outcomes work correctly", () => {
    test("rock beats scissors", () => {
        let playerMove = "rock";
        let computerMove = "scissors";
              expect(outcome).toBe("playerWin");
            });
          });

describe ("scores increase with winning turn", () => {

})
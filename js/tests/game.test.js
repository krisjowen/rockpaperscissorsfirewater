/**
 * @jest-environment jsdom
 */
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const { game} = require("../game");

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
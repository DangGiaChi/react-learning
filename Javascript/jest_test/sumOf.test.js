const sumOf = require("./sumOf");
const { defaut: TestRunner } = require("jest-runner");

test("Return the sum of 2 values", () => {
    expect(sumOf(12, 5)).toBe(17)
})
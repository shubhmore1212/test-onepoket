const { sumOfArray } = require("../index.js");

test("should return sum of the numbers", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
});

test("should return 0 for empty array", () => {
  expect(sumOfArray([])).toBe(0);
});

test("should return sum of the numbers for decimal numbers too", () => {
  expect(sumOfArray([1, 2, 3.2])).toBe(6.2);
});

test("should return NaN for array with string", () => {
  expect(sumOfArray(["a", "a", "a"])).toBe(NaN);
  expect(sumOfArray([1, 2, "a"])).toBe(NaN);
});

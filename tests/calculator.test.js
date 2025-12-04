import calculator from "../codes/calculator.js";

test("1 + 1 = 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("1 - 1 = 0", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("1 / 1 = 1", () => {
  expect(calculator.divide(1, 1)).toBe(1);
});

test("1 * 1 = 1", () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});

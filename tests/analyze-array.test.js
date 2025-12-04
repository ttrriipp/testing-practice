import analyzeArray from "../codes/analyze-array.js";

test("[1, 2, 3], average is 2", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("average", 2);
});

test("[1,8,3,4,2,6], average is 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});

test("[1,8,3,4,2,6], min is 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
});

test("[1,8,3,4,2,6], max is 8", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
});

test("[1,8,3,4,2,6], length is 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
});

test("[1,8,3,4,2,6], avg is 4 and min is 1, max is 8", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

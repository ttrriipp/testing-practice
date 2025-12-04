import capitalize from "../codes/capitalize.js";

test("harvey to Harvey", () => {
  expect(capitalize("harvey")).toBe("Harvey");
});

test("craz night to Crazy night", () => {
  expect(capitalize("crazy night")).toBe("Crazy night");
});

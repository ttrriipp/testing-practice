import reverseString from "./reverse-string.js";

test("harvey to yevrah", () => {
  expect(reverseString("harvey")).toBe("yevrah");
});

test("crazy night to thgin yzarc", () => {
  expect(reverseString("crazy night")).toBe("thgin yzarc");
});

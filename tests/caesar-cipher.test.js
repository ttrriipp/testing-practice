import caesarCipher from "../codes/caesar-cipher.js";

test("lol to mpm", () => {
  expect(caesarCipher("lol", 1)).toBe("mpm");
});

test("yzy to zaz", () => {
  expect(caesarCipher("yzy", 1)).toBe("zaz");
});

test("xyz to abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("HeLLo to KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Hello, World! to Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

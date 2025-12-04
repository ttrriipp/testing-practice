export default function caesarCipher(string, key) {
  // char codes
  const lowerMin = 97;
  const lowerMax = 122;

  const upperMin = 65;
  const upperMax = 90;

  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let isAlphabet = true;
    if (
      !(string.charCodeAt(i) >= upperMin && string.charCodeAt(i) <= upperMax) &&
      !(string.charCodeAt(i) >= lowerMin && string.charCodeAt(i) <= lowerMax)
    ) {
      isAlphabet = false;
    }

    if (isAlphabet) {
      let isLower = true;
      if (
        string.charCodeAt(i) >= upperMin &&
        string.charCodeAt(i) <= upperMax
      ) {
        isLower = false;
      }

      let newCharCode = string.charCodeAt(i) + key;

      if (isLower && newCharCode > lowerMax) {
        const excess = newCharCode - lowerMax - 1;
        newCharCode = lowerMin + excess;
      } else if (!isLower && newCharCode > upperMax) {
        const excess = newCharCode - upperMax - 1;
        newCharCode = upperMax + excess;
      }

      const shiftedLetter = String.fromCharCode(newCharCode);
      newString += shiftedLetter;
    } else newString += string.charAt(i);
  }

  return newString;
}

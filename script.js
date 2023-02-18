function findUniqueChar(text) {
  const words = text.split(/[\s,.]+/);
  const uniqueChars = [];

  for (const word of words) {
    const charCount = {};
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of word) {
      if (charCount[char] === 1) {
        uniqueChars.push(char);
        break;
      }
    }
  }

  for (const char of uniqueChars) {
    if (uniqueChars.filter(c => c === char).length === 1) {
      return char;
    }
  }

  return null;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const inputText = document.querySelector('#inputText').value;
  const result = findUniqueChar(inputText);
  document.querySelector('#result').textContent = `Унікальний символ: ${result}`;
});

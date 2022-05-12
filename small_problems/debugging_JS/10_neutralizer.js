function neutralize(sentence) {
  let words = sentence.split(" ");

  return words.filter(word => !isNegative(word)).join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

//Test
console.log(
  neutralize("These dull dull boring boring chaotic cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.
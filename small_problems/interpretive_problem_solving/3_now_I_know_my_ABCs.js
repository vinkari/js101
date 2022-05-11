/*
A collection of spelling blocks has two letters per block, as shown in this list:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. 
You can also only use each block once.
Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. 
You can consider the letters to be case-insensitive when you apply the rules.
*/

function isBlockWord(word) {
  let arr = [['B', 'O', 0], ['X', 'K', 0], ['D', 'Q,', 0], ['C', 'P', 0], ['N', 'A', 0], ['G', 'T', 0], ['R', 'E', 0], ['F', 'S', 0], ['J', 'W', 0], ['H', 'U', 0], ['V', 'I', 0], ['L', 'Y', 0], ['Z', 'M', 0]];

  [...word].forEach(letter => arr.forEach(block => {
    if (block.includes(letter.toUpperCase())) {
      block[2] += 1;
    }
  }));

  return !(arr.flat().some(char => char > 1));
}

//Test
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
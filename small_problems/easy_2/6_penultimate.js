/*
Write a function that returns the next to last word in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.

Further Exploration
Suppose we need a function that retrieves the middle word of a phrase/sentence. 
What edge cases need to be considered? How would you handle those edge cases without ignoring them? 
Write a function that returns the middle word of a phrase or sentence. 
It should handle all of the edge cases you thought of.
*/

function penultimate (string) {
  let wordsArray = string.split(' ');
  return wordsArray[wordsArray.length - 2];
}

//Test
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
Further Exploration
Edge cases:
Empty string
One word
Even number of words
*/
function middle (string) {
  let wordsArray = string.split(' ');
  if (wordsArray.length <= 2) {
    return string;
  } else if (wordsArray.length % 2 === 0) {
    return `${wordsArray[(wordsArray.length / 2) - 1]}, ${wordsArray[(wordsArray.length / 2)]}`;
  } else {
    return `${wordsArray[(wordsArray.length - 1) / 2]}`
  }
}

//Test
console.log(middle('1 2 3 4 5'));
console.log(middle('1 2 3 4 5 6'));
console.log(middle('1 2'));
console.log(middle('1'));
console.log(middle(''));
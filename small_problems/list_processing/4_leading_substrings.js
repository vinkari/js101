/*
Write a function that takes a string argument and returns a list of substrings of that string. 
Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Further Exploration
Rewrite leadingSubstrings using list processing functions. T
hat is, convert the string into an array of some sort and use functions like map, filter, or reduce to get the desired substrings. 
(You will also need to use join.) 
Try not to use forEach as that is too similar to the for loop approach.
*/

function leadingSubstrings(string) {
  let resultArr = [];
  for (let i = 1; i <= string.length; i++) {
    resultArr.push(string.slice(0, i));
  }
  return resultArr;
}

//Further Exploration
function leadingSubstrings1(string) {
  return [...string].map((_, idx, arr) => arr.slice(0, idx + 1).join(''));
}

//Test
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
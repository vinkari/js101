/*
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.
*/

function stringy (integer) {
  let string = '';
  for (let i = 0; i < integer; i++) {
    (i % 2 === 0) ? string += '1' : string += '0';
  }
  return string;
}

//Test
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
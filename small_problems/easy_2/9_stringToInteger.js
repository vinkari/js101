/*
Write a function that takes a string of digits and returns the appropriate number as an integer.
For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). 
Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Further Exploration
Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. 
Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.
*/

const NUM = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToInteger (string) {
  let array = string.split('');
  let number = 0;
  array.forEach((element, index) => {
    let i = array.length - 1 - index;
    number += NUM[element] * 10 ** i;
  });
  return number;
}

//Test
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//Further Exploration
const HEX_VALUES = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function hexadecimalToInteger (hex) {
  let array = hex.split('');
  let arrayCaps = array.map((element) => (typeof element === 'string') ? element.toUpperCase() : element);
  
  let number = 0;
  arrayCaps.forEach((element, index) => {
    let i = array.length - 1 - index;
    number += HEX_VALUES[element] * 16 ** i;
  })
  return number;
}

//Test
console.log(hexadecimalToInteger('4D9f') === 19871); // logs true

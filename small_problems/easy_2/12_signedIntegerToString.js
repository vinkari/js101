/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.
Write a function that takes an integer and converts it to a string representation.
You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.
You might also want to check the Math.sign() function.
*/

const NUM_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString (integer) {
  let number = integer;
  stringArr = [];
  //if (number === 0) return '0';
  while (number > 0) {
    if (number > 9) {
    stringArr.push(NUM_ARRAY[number % 10]);
    number = Math.floor(number / 10);
  } else {
    stringArr.push(NUM_ARRAY[number]);
    number = 0;
    }
  }
  return stringArr.reverse().join('');
}

function signedIntegerToString (integer) {
  if (Math.sign(integer) === -1) return '-' + integerToString(integer * -1)
  else if (integer === 0) return '0'
  else return '+' + integerToString(integer);
}

//Test
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
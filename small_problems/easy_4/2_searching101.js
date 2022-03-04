/*
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Example:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

Further Exploration:
What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25), instead of a specific number? 
Would the current solution still work? Why or why not? Think about this first before scrolling down.
*/

const readline = require('readline-sync');

function searching () {
  let num1 = readline.question('Enter the 1st number: ');
  let num2 = readline.question('Enter the 2nd number: ');
  let num3 = readline.question('Enter the 3rd number: ');
  let num4 = readline.question('Enter the 4th number: ');
  let num5 = readline.question('Enter the 5th number: ');
  let num6 = readline.question('Enter the last number: ');

  let numberArr = [num1, num2, num3, num4, num5];

  if (numberArr.includes(num6)) {
    console.log(`The number ${num6} appears in ${numberArr.join()}.`);
  } else {
    console.log(`The number ${num6} does not appear in ${numberArr.join()}.`);
  }
}

searching();

//Further Exploration:
function searchingF () {
  let num1 = readline.question('Enter the 1st number: ');
  let num2 = readline.question('Enter the 2nd number: ');
  let num3 = readline.question('Enter the 3rd number: ');
  let num4 = readline.question('Enter the 4th number: ');
  let num5 = readline.question('Enter the 5th number: ');
  let num6 = readline.question('Enter the last number: '); //check if a number greater than this number is present in the previous numbers

  let numberArr = [num1, num2, num3, num4, num5];

  let greaterThan = function(number) {
    return number > num6;
  }

  if (numberArr.some(greaterThan)) {
    console.log(`A number greater than ${num6} appears in ${numberArr.join()}.`);
  } else {
    console.log(`A number greater than ${num6} does not appear in ${numberArr.join()}.`);
  }
}

searchingF();
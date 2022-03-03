/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Further Exploration:
Repeat this exercise with a technique different from the one that you used, and different from the one provided. 
Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

for (let i = 1; i <= 9; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//Further Exploration
function oddLogger (num1, num2) {
  let i = num1;
  while (i <= num2) {
    console.log(i);
    i += 2
  }
}

oddLogger(1, 9);
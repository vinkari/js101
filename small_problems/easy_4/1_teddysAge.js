/*
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Further exploration:
Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?
*/

function teddysAge (min, max) {
  let age = 0;
  while (age < min) {
  age = Math.ceil(max * Math.random());
  }
  console.log(`Teddy is ${age} years old!`);
}

teddysAge(115, 120);

//Further exploration
function teddysAgeF (num1, num2) {
  let min;
  let max;
  let age = 0;

  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  while (age < min) {
  age = Math.ceil(max * Math.random());
  }
  console.log(`Teddy is ${age} years old!`);
}

teddysAgeF(125, 120);
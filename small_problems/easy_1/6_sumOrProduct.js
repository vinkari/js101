/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Further Exploration:
What if the input was an array of integers instead of just a single integer? 
How would your computeSum and computeProduct functions change? 
Given that the input is an array, how might you make use of the Array.prototype.reduce() method?
*/

const rl = require('readline-sync');

let input = Number(rl.question('Please enter an integer greater than 0: '));
let compChoice = rl.question('Enter "s" to compute the sum, or "p" to compute the product. ')

function computeSum (input) {
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum = sum + i;
  }
  return sum;
}

function computeProduct (input) {
  let product = 1;
  for (let i = 1; i <= 6; i++) {
    product = product * i;
  }
  return product;
}

switch (compChoice) {
  case 's':
    let sumValue = computeSum(input);
    console.log(`The sum of the integers between 1 and ${input} is ${sumValue}.`);
    break;
  case 'p':
    let productValue = computeProduct(input);
    console.log(`The product of the integers between 1 and ${input} is ${productValue}.`);
}


//Further Exploration
let arr = [1, 2, 3, 4, 5, 6];

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

let product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = today.getFullYear();

let yearsLeft = retirementAge - age;
let retirementYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.\nYou have only ${yearsLeft} years of work to go!`);
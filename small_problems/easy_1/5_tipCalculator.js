/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.
*/

const rl = require('readline-sync');

console.log('What is the bill?');
let bill = Number(rl.question());

console.log('What is the tip percentage?');
let tipPercent = Number(rl.question());

let tip = bill * (tipPercent / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);
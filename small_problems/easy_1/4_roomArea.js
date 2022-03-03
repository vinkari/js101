/*
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.
Note: 1 square meter == 10.7639 square feet
Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Further Exploration:
Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.
*/

const readline = require('readline-sync');
const FEET_IN_METER = 10.7639;

console.log('Enter the length of the room:');
let length = Number(readline.question());

console.log('Enter the width of the room:');
let width = Number(readline.question());

console.log('Did you enter the values in meters or feet? (Answer "m" or "f")');
let unit = readline.question();

let area = length * width;
let areaInMeters;
let areaInFeet;

switch (unit) {
  case 'm':
    areaInMeters = area;
    areaInFeet = area * FEET_IN_METER;
    console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)
    break;
  case 'f':
    areaInMeters = area / FEET_IN_METER;
    areaInFeet = area;
    console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`)
}
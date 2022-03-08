/*
Question 1
Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
*/
let advice = "Few things in life are as important as house training your important pet dinosaur.";
advice.split(' ').map(word => word.replace('important', 'urgent')).join(' ');


/*
Question 2
The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
Both of these methods mutate the original array as shown below. 
Write two distinct ways of reversing the array without mutating the original array. 
Use reverse for the first solution, and sort for the second.
Bonus Question: Can you do it using the Array.prototype.forEach() method?
*/
let numbers = [1, 2, 3, 4, 5];
[...numbers].reverse();

numbers = [1, 2, 3, 4, 5];
numbers.slice(0).sort((num1, num2) => num2 - num1);

let reversedNumbers = [];
numbers.forEach((_, index) => reversedNumbers.push(numbers[numbers.length - 1 - index]));

//Given solution:
let reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});


/*
Question 3
Given a number and an array, determine whether the number is included in the array.
*/
let nums = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let num1 = 8;  // false
let num2 = 95; // true

nums.includes(8);
nums.includes(95);


/*
Question 4
Starting with the given string, show two different ways to put the expected "Four score and " in front of it.
*/
let famousWords = "seven years ago...";
let additionalWords = "Four score and "

additionalWords + famousWords;
additionalWords.concat(famousWords);


/*
Question 5
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
*/
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);


/*
Question 6
Create a new array from the following array ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]] that contains all of its values, but in an un-nested format:
*/
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let unnestedArr = [];
flintstones.forEach(element => {
  if (!Array.isArray(element)) {
    unnestedArr.push(element);
  } else {
    element.forEach(elementN => unnestedArr.push(elementN));
  }
});

//Given solutions
//using spread notation"
[].concat(...flintstones);
//using reduce"
flintstones = flintstones.reduce((acc, element) => {
  return acc.concat(element);
}, []);
//using forEach"
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
//using flat:
let newFlintstones2 = flintstones.flat();


/*
Question 7
Consider the following object:
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 }
Create an array from this object that contains only two elements: Barney's name and Barney's number:
[ 'Barney', 2 ]
*/
let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones2)[2]; //obv only usable when target's exact location in object is known 

//Given solution
Object.entries(flintstones2).filter(pair => pair[0] === "Barney").shift();


/*
Question 8
How would you check whether the objects assigned to variables numbers and table below are arrays?
*/
let numbers2 = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

Array.isArray(numbers2);
Array.isArray(table);


/*
Question 9
Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
title = "Flintstone Family Members"
*/
let title = 'Flintstone Family Members';

let space = Math.floor((40 - title.length) / 2);
' '.repeat(space) + title;

//Given solution
title.padStart(space + title.length);


/*
Question 10
Write two one-line expressions to count the number of lower-case t characters in each of the following strings:
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

[...statement1].filter(ele => ele === 't').length;
[...statement2].filter(ele => ele === 't').length;
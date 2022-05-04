/*
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Further Exploration
What if the person has one or more middle names? 
Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name.
*/

function swapName(name) {
  let arr = name.split(' ');
  let displayName = arr[arr.length - 1] + ', ';
  arr.pop();
  return displayName += arr.join(' ');
}

//Test
console.log(swapName('Joe Roberts'));
console.log(swapName('Karl Oskar Henriksson Ragvals'));
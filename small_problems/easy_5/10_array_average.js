/*
Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. 
The array will never be empty, and the numbers will always be positive integers.
*/

function average(arr) {
  return Math.floor(arr.reduce((acc, cv) => acc + cv) / arr.length);
}

//Test
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
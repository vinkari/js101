/*
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Further Exploration:
Can you rewrite the solution using the Array.prototype.map method? What types of problems do you think are well-suited for the Array.prototype.map method?
*/

function runningTotal (arr) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    result.push(sum += arr[i]);
  }
  return result;
}

//Test
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

//Further Exploration
function runningTotalF (arr) {
  let sum = 0;
  return arr.map(element => sum += element);
}

//Test
console.log(runningTotalF([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalF([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalF([3]));                    // [3]
console.log(runningTotalF([]));                     // []
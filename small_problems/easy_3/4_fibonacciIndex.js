/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. 
Fibonacci numbers often appear in mathematics and nature.
Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.
Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
You may assume that the argument is always an integer greater than or equal to 2.
*/

//First attempt while unsure of how to implement bigInt
function findFibonacciIndexByLength (num) {
  let arr = [1, 1];
  for (let i = 0; i < Infinity; i += 1) {
    if ((arr[i] / (10 ** num)) <= 1 / 10) {
      arr.push(arr[i] + arr[i + 1]);
    } else break;
  }
  console.log(arr.length - 1);
}

// console.log(findFibonacciIndexByLength(2))
// console.log(findFibonacciIndexByLength(2))// === 7n;    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3))// === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10))// === 45n;
// console.log(findFibonacciIndexByLength(16))// === 74n;
// console.log(findFibonacciIndexByLength(100))// === 476n;
// console.log(findFibonacciIndexByLength(1000))// === 4782n;
// console.log(findFibonacciIndexByLength(10000))// === 47847n;

//Given solution
function findFibonacciIndexByLength (num) {
  let num1 = 1n;
  let num2 = 1n;
  let fibonacci;
  let count = 2n;

  do {
    fibonacci = num1 + num2;
    num1 = num2;
    num2 = fibonacci;
    count += 1n;
  } while (String(fibonacci).length < num);
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
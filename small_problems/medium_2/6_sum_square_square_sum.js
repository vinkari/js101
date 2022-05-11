/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.
*/

function sumSquareDifference(num) {
  let sum = 0;
  let squareSum = 0
  for (let i = 1; i <= num; i++) {
    sum += i;
    squareSum += i ** 2;
  }
  return (sum ** 2) - squareSum;
}

//Test
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
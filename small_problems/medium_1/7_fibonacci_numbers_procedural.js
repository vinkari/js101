/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. 
In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. 
If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.
Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.
Rewrite your recursive fibonacci function so that it computes its results without using recursion.
*/

function fibonacci(num) {
  let arr = [1, 1];

  for (let i = 2; i < num; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[arr.length - 1];
}

//Test
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
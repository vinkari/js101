/*

1.
Given 2 numbers
Declare function `sum` with parameters num1, num2
return num1 + num2

2.
Given an array of strings
Declare `concatString` = ""
While looping though the array, add each element to concatString
Print concatString

3.
Given array of numbers
Declare `result` = []
While looping through given array, add elemnts at even indexes to `result` array
Print `result`

*/

//let result = [];
function everyOther(arr) {
  return arr.filter((element, index) => index % 2 === 0)
}

console.log(everyOther([1,4,7,2,5]));
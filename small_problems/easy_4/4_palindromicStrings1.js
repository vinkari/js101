/*
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.
*/

function isPalindrome (string) {
  let stringArr = string.split('');
  let stringArrCopy = [...stringArr];
  let reversedStringArr = stringArrCopy.reverse();
  return compareArr(stringArr, reversedStringArr);
}

function compareArr (arr1, arr2) {
  let state = true;
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      return state = false;
    }
  })
  return state;
}

//Test
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
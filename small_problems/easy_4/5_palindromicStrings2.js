/*
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
*/

function isRealPalindrome (string) {
  let validCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let realString = '';
  for (let i = 0; i < string.length; i++) {
    if (validCharacters.includes(string[i].toLowerCase())) {
      realString += string[i].toLowerCase();
    }
  }
  return isPalindrome(realString);
}

function isPalindrome (string) {
  return string === string.split('').reverse().join('');
}

//Test
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false)
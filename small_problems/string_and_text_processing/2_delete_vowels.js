/*
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels(array) {
  return array.map(string => {
    let resultStringArray = [];
    [...string].forEach(char => {
      if (!'aeiou'.includes(char.toLowerCase())) {
        resultStringArray.push(char);
      }
    });
    return resultStringArray.join('');
  });
}

//Test
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
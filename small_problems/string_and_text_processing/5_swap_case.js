/*
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
Leave all other characters unchanged.
*/

function swapCase(string) {
  let resultArr = [];
  string.split('')
        .forEach(char => resultArr.push('abcdefghijklmnopqrstuvwxyz'.includes(char) ? 
                                                  char.toUpperCase() : char.toLowerCase()));
  return resultArr.join('');
}

//Test
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
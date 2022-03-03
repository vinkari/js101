/*
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:
cleanUp("---what's my +*& line?");    
// " what s my line "
*/

function cleanUp (string) {
  let letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let cleanStr = '';
  for (let i = 0; i < string.length; i++) {
    if (letterArr.includes(string[i].toLowerCase())) {
      cleanStr += string[i];
    } else if (cleanStr[cleanStr.length - 1] !== ' ') {
      cleanStr += ' ';
    }
  }
  return cleanStr;
}

console.log(cleanUp("---what'S my +*& line?")); // " what s my line "
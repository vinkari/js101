/*
Modify the console.log(wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
*/

function wordSizes (string) {
  let cleanString = '';
  for (let i = 0; i < string.length; i++) {
    if (isLetterOrSpace(string[i].toLowerCase())) {
      cleanString += string[i];
    }
  }
  let obj = {};
  if (cleanString.trim() === '') return obj;

  let wordArr = cleanString.split(' ');
  let wordLengths = wordArr.map(word => word.length);

  wordLengths.forEach(length => {
    if (!obj[length]) {
      obj[length] = 0;
    }
  })
  wordLengths.forEach(length => obj[length] += 1);
  return obj;
}

function isLetterOrSpace (char) {
  return char >= 'a' && char <= 'z' || char === ' ';
}

//Test
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
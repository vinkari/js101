/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
*/

function wordToDigit(string) {
  let numWordArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let punc = ['.', ',', '!', '?'];
  let resultArr = [];
  string.split(' ').forEach(word => {
    let plainWord;
    let punctuation;
    if (punc.includes(word[word.length - 1])) {
      plainWord = word.slice(0, word.length - 1);
      punctuation = word[word.length -1];
    }
    if (numWordArr.includes(word)) {
      resultArr.push(String(numWordArr.indexOf(word)));
    } else if (numWordArr.includes(plainWord)) {
      resultArr.push(String(numWordArr.indexOf(plainWord)) + punctuation);
    } else resultArr.push(word); 
  });
  return resultArr.join(' ');
}

//Test
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
/*
Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number.
*/

function alphabeticNumberSort(arr) {
  let numberNames = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen:19 }
  let resultArr = [];
  Object.keys(numberNames).sort().forEach(name => {
    if (arr.includes(numberNames[name])) {
      resultArr.push(numberNames[name])
    }
  });
 return resultArr;
}

//Test
console.log(alphabeticNumberSort1([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


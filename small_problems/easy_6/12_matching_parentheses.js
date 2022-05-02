/*
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. 
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
*/

function isBalanced(string) {
  let bracketArr = [...string].filter(char => char === '(' || char === ')');
  let counter = 0;
  for (let i = 0; i < bracketArr.length; i++) {
    bracketArr[i] === '(' ? counter += 1 : counter -= 1;
    if (counter === -1) return false;
  }
  return counter === 0;
}

//Test
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

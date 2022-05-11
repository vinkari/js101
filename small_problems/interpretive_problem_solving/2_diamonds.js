/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.
*/

function diamond(n) {
  let middle = Math.ceil(n / 2);
  topHalf(middle);
  bottomHalf(n, middle);
}

function topHalf(n) {
  let stars = 1;
  for (let i = 1; i <= n; i++) {
    console.log(`${' '.repeat(n - i)}${'*'.repeat(stars)}`);
    stars += 2;
  }
}

function bottomHalf(n, middle) {
  let startingPosition = middle - 1;
  let stars = n - 2;
  let spaces = 1;
  for (let i = startingPosition; i >= 1; i--) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars -= 2;
    spaces += 1;
  } 
}

//Test
diamond(19);
diamond(1);
diamond(3);
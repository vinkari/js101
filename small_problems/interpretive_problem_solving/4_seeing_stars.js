/*
Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. 
The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).
*/

function star(n) {
  let topStarArr = [];

  let blankRow = [];
  for (let i = 1; i <= n; i++) {
    blankRow.push(' ');
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let currentRow = blankRow.slice();
    currentRow[i] = '*';
    currentRow[Math.floor(n / 2)] = '*';
    currentRow[currentRow.length - i - 1] = '*';
    topStarArr.push(currentRow);
    currentRow = blankRow.slice();
  }

  let bottomStarArr = topStarArr.slice().reverse();

  let starRow = [];
  for (let i = 1; i <= n; i++) {
    starRow.push('*');
  }

  topStarArr.push(starRow);
  
  let starArr = topStarArr.concat(bottomStarArr);

  starArr.forEach(row => console.log(row.join('')));
}

//Test
star(7);
star(9);
star(15);
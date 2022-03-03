/*
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Example:
triangle(5);

    *
   **
  ***
 ****
*****
*/

function triangle (n) {
  for (let i = 1; i <= n; i ++) {
    console.log(`${' '.repeat(n - i) + '*'.repeat(i)}`);
  }
}

//Test
triangle(5);
triangle(10);


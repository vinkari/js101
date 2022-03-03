/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.
Numerical score letter grade list:
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
*/

function getGrade (score1, score2, score3) {
  let mean = (score1 + score2 + score3) / 3;
  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (mean >= 80 && mean <= 90) {
    return 'B';
  } else if (mean >= 70 && mean <= 80) {
    return 'C';
  } else if (mean >= 60 && mean <= 70) {
    return 'D';
  } else {
    return 'F';
  }
}

//Test
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
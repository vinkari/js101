/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.
Assume this rule is valid for any year greater than year 0. 
Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

Further Exploration:
Can you rewrite isLeapYear to perform its tests in the opposite order of the above solution? 
That is, test whether the year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally, if necessary, test whether it is divisible by 400. 
Is this solution simpler or more complex than the original solution?
*/

function isLeapYear (year) {
  if (year > 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0;
  }
}

//Further Exploration
function isLeapYearF (year) {
  if (year % 4 !== 0) {
    return false;
  } else {
    return !(year % 100 === 0 && year % 400 !== 0);
  }
}

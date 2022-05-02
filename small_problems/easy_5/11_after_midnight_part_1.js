/*
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
Your function should work with any integer input.

You may not use javascript's Date class methods.
*/

function timeOfDay(minutes) {
  while (minutes > 1440) {
    minutes -= 1440;
  }

  while (minutes < 0) {
    minutes += 1440;
  }

  let hrs = Math.floor(minutes / 60);
  let mins = minutes - (hrs * 60);

  hrs = hrs < 10 ? '0' + hrs : String(hrs);
  mins = mins < 10 ? '0' + mins : String(mins);

  return `${hrs}:${mins}`;
}

//Test
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
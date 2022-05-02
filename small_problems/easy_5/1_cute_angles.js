/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. 
You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. 
There are 60 minutes in a degree, and 60 seconds in a minute.

Further Exploration:
The current solution implementation only works with positive numbers in the range of 0 to 360 (inclusive). 
Can you refactor it so that it works with any positive or negative number?
*/

function dms(angle) {

  while (angle < 0) {
    angle += 360;
  }

  while (angle > 360) {
    angle -= 360;
  }
  
  let float = angle - Math.floor(angle);
  let degree = angle - float;
  let minutes = String(Math.floor(float * 60));
  let seconds = String(Math.round((float * 60 - Number(minutes)) * 60));

  if (minutes.length === 1) {
    minutes = 0 + minutes;
  }

  if (seconds.length === 1) {
    seconds = 0 + seconds;
  }

  return(`${degree}°${minutes}'${seconds}"`);
}


//Test
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6);        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));           // 359°00'00"
console.log(dms(400));          // 40°00'00"
console.log(dms(-40));          // 320°00'00"
console.log(dms(-420));         // 300°00'00"
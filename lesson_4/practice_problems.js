/*
#1
What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

The return value is [1, 2, 3] because 'hi' evaluates as truthy.

#2
What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

the return value is [undefined, undefined, undefined].
This is because the return keyword is required when curly braces are used to define the function block.
Since there is no explicit return, the callback function returns undefined.

#3
The following code differs slightly from the above code. What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);

[1, 4, 9] since an explicit return is not required in an arrow function that contains a single line expression.

#4
What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length;

It returns 11 since the pop method removes the last element of the array and returns that value, which is "caterpillar" in this case.
The length property is then called on the string "caterpillar" which returns 11.

#5
What is the callback's return value in the following code? Also, what is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});

On each iteration, the callback returns the current num * 2, so 2, 4, 6. It then returns true since the return values in all the iterations were truthy.

#6
How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

The fill() method changes all elements in an array to a static value, from a start index to an end index.
It returns the modified array.

It is destructive. Checking the value of arr after calling fill on it shows the modified array.

#7
What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

The return value is [undefined, 'bear']. The 'ant' element does not satisfy the given condition, so it evaluates as false and elem isn't returned.
When a function doesn't explicitly return something, it implicitly returns undefined. That's why we see undefined as the first element of the returned array.

#8
Take a look at the following array.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let obj = {};
flintstones.forEach((elem, idx) => obj[elem] = idx);

console.log(obj);

/*
#9
Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((acc, cv) => acc + cv));

/*
#10
Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
*/

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages2).sort((a, b) => a - b)[0]);

/*
#11
Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";
The output will look something like the following:
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
*/

let statement = "The Flintstones Rock";
let obj2 = {};

[...statement].filter(elem => elem !== ' ').forEach(elem => {
  if (!obj2.hasOwnProperty(elem)) {
  obj2[elem] = 1;
  } else {
    obj2[elem] += 1;
  }
})

console.log(obj2);
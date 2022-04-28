/*
#1
How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
*/

let arr = ['10', '11', '9', '7', '8'];
console.log(arr.sort((a, b) => Number(b) - Number(a)));

/*
#2
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => Number(a.published) - Number(b.published)))

/*
#3
For each of these collection objects, demonstrate how you would access the letter g.
*/

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
console.log(Object.keys(obj2.third)[0]);

/*
 4
For each of these collection objects, demonstrate how you would change the value 3 to 4.
*/

let arr1 = [1, [2, 3], 4];
console.log(arr1[1][1] = 4);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
console.log(arr2[2] = 4);

let obj1 = { first: [1, 2, [3]] };
console.log(obj1.first[2][0] = 4);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
console.log(obj2.a.a[2] = 4);

/*
5
Compute and display the total age of the male members of the family in the following nested object:
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.values(munsters).filter(element => element.gender === 'male').map(obj => obj.age).reduce((acc, cv) => acc + cv));

/*
6
One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.
Given this previously seen family object, print the name, age, and gender of each family member:
*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let name in munsters) {
  console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}.`)
}

/*
7
Given the following code, what will the final values of a and b be? Try to answer without running the code.
*/

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2; // a = 2
arr[1][0] -= a; // b = [3, 8]

/*
8
Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let string = '';
Object.keys(obj).forEach(key => obj[key].forEach(element => string += element));
[...string].forEach(element => {
  if (/[aeiou]/.test(element)) {
    console.log(element);
  }
})

/*
9
Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(subArr => subArr.sort((a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    return a.charCodeAt() - b.charCodeAt();
  }
})))

/*
10
Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
}))

/*
11
Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. 
Do not modify the original data structure.
*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr.map(obj => {
  let objCopy = Object.assign({}, obj)
  for (let prop in objCopy) {
    objCopy[prop] +=1;
  }
  return objCopy;
}))

/*
12
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(subArr => subArr.filter(element => element % 3 === 0)));

/*
13
Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(arr.sort((a, b) => {
  return a.reduce((acc, cv) => {
    if (cv % 2 === 1) {
      return acc + cv;
    } else {
      return acc;
    }
  }, 0)
   - b.reduce((acc, cv) => {
    if (cv % 2 === 1) {
      return acc + cv;
    } else {
      return acc;
    }
  }, 0)
}));

/*
14
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. 
The sizes should be uppercase, and the colors should be capitalized.
*/

let arr = [];

for (let prop in obj) {
  if (obj[prop].type === 'fruit') {
    arr.push(obj[prop].colors.map(color => {
      let capColor = color[0].toUpperCase();
      for (let i = 1; i < color.length; i++) {
        capColor += color[i];
      }
      return capColor;
    }))
  } else {
    arr.push(obj[prop].size.toUpperCase());
  }
}

console.log(arr);

/*
15
Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

console.log(arr.filter(obj => {
  return Object.values(obj).flat().every(value => value % 2 === 0);
}));

/*
16
Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};
arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
});

console.log(obj);

/*
17
A UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
Write a function that takes no arguments and returns a string that contains a UUID.
*/

function randomChar () {
  let random = Math.floor(Math.random() * 16);
  if (random > 9) {
    switch (random) {
      case 10:
        random = 'a';
        break;
      case 11:
        random = 'b';
        break;
      case 12:
        random = 'c';
        break;
      case 13:
        random = 'd';
        break;
      case 14:
        random = 'e';
        break;
      case 15:
        random = 'f';
        break;
    }
  } 
  return random;
}

function UUID () {
  let code = '';
  for (let i = 0; i < 36; i++) {
    code += randomChar();
  }

  let codeArr = [...code];

  codeArr[8] = '-';
  codeArr[13] = '-';
  codeArr[18] = '-';
  codeArr[23] = '-';

  return codeArr.join('');
}

console.log(UUID())
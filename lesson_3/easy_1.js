/*Question 1
Will the code below raise an error?
What will line 3 return?
*/
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; //returns undefined, however, the array does not contain a value at index 4, it's an <empty space> 
//The above code will not throw an error


/*
Question 2
How can you determine whether a given string ends with an exclamation mark (!)?
*/
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith('!');
str2.endsWith('!');


/*
Question 3
Determine whether the following object of people and their age contains an entry for 'Spot':
*/
let Ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

Object.keys(Ages).includes('Spot')
//Given solution:
console.log(Ages.hasOwnProperty('Spot'));


/*
Question 4
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
*/
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newString = munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1);


/*
Question 5
What will the following code output?
*/
console.log(false == '0'); //true
console.log(false === '0'); //false


/*
Question 6
We have most of the Munster family in our ages object:
Add entries for Marilyn and Spot to the object:
*/
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);


/*
Question 7
Determine whether the name Dino appears in the strings below -- check each string separately):
*/
let s1 = "Few things in life are as important as house training your pet dinosaur.";
let s2 = "Fred and Wilma have a pet dinosaur named Dino.";

/Dino/.test(s1);
/Dino/.test(s2);


/*
Question 8
How can we add the family pet, "Dino", to the following array?
*/
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');


/*
Question 9
In the previous problem, our first answer added 'Dino' to the array like this:
flintstones.push("Dino");
How can we add multiple items to our array? ('Bones' and 'Hoppy')
*/
flintstones.push('Bones', 'Hoppy')


/*
Question 10
Return a new version of this sentence that ends just before the word house.
Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
*/
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.slice(0, advice.indexOf('house'));
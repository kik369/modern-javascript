// ; is end of statement
// JavaScript runs top to bottom

// can change let variables
// can't change const variables

// use camelCase for variables

let myAge = 21;
const year = 2020;

console.log(22, myAge, year, 'hey');

myAge = 30;

console.log(22, myAge, year, 'hey');

// data types - lesson 8
// JS is a loosely typed language, meaning you don’t have to specify what type of information will be stored in a variable in advance

// strings
console.log('name@email.com');

// string concatenation
let firstName = 'John';
let lastName = 'Smith';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting single character
console.log(fullName[0]);

// string length (property, not method)
console.log(fullName.length);

// string methods (methods are functions that are associated with objects or data types)
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

// string methods don't alter the original value
console.log(fullName);

let email = 'name@email.com';

// get index of a character
// pass an argument to the method
let index = email.indexOf('@');
console.log(index);

// common string methods
console.log(result.lastIndexOf('s'));

// slice a section of a string
console.log(result.slice(0, 6));

// substring
// where to start, how many chars long
let substring = result.substr(2, 2);
console.log(substring);

// replace a char with another char (only replaces the first match)
console.log(result.replace('jo', 'K'));
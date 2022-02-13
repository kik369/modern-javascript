// booleans
let email = 'cark@refaktor.dev';
let names = ['mark', 'cark', 'clark'];

// let result = email.includes('@');
let result = names.includes('clark');

console.log(result);

let age = 25;

// returns true or false
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age < 30);
console.log(age <= 30);

let name = 'cark';
console.log(name == 'clark');

// loose & strict comparison
// == is loose equality, meaning, variable type is not considered
// === strict comparison, meaning, type has to match

console.log(25 == '25');
console.log(25 === '25');

// type conversion
let score = '100';
console.log(typeof score);

// converts a string to number
score = Number(score);
console.log(score + 1);

// check type of variable
console.log(typeof score);

let toNum = 50;
// convert number to string
toNum = String(toNum);
console.log(typeof toNum);

// positive and negative numbers are truthy and 0 is falsy
// Boolean(0);
// strings of any length are truthy, empty string is falsy
// arrays
// for storing data

let people = ['mark', 'cark', 'clark'];

people[1] = 'stark'

console.log(people);
console.log(people[1]);

let ages = [20, 25, 30, 35];

console.log(ages);

console.log(people.length);

// array methods
// let result = people.join(', ');
// let result = people.indexOf('clark');
// let result = people.concat('stork', 'cork');
let result = people.push('dork');
result = people.pop('dork');

console.log(result);
console.log(people);

// null & undefiend
// let age;
let age = null;
console.log(age, age + 3, `the age is ${age}`);
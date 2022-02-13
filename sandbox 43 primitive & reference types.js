// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`);

scoreOne = 100;
console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`);

// reference values

const userOne = { name: 'cark', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;

console.log(userOne, userTwo);
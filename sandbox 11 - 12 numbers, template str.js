// numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, % (Modulus (Remainder)), ++ (Increment), -- (Decrement)
// https://www.w3schools.com/js/js_arithmetic.asp
console.log(radius % 3);
console.log(pi * radius ** 2);

// order of operations
// brackets - indices - division - multiplication - addition - subtraction

radius++;
radius--;

radius *= 2;
radius /= 2;
radius += 2;
radius -= 2;

console.log(radius);

// NaN - not a number
console.log(5 * 'hello');

// concatonate
console.log('radius of the circle is ' + radius + ' absolute units');

// template strings
const title = 'cool blog title';
const author = 'mario';
const likes = 30;

//concatenation way
let result = 'the blog ' + title + ' by ' + author + ' has ' + likes + ' likes.';

// template string  (template literal) way
let result1 = `the blog ${title} by ${author} has ${likes} likes.`;

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>${likes}</span>
`;

console.log(result);
console.log(result1);
console.log(html);
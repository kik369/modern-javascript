// arrow functions

// regular function
// const calcArea = function(radius) {
//     return 3.14 * radius ** 2;
// }

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// };

// if exactly 1 parameter, we can remove the ()
// 0 or more than 1 parameter need ()
// const calcArea = radius => {
//     return 3.14 * radius ** 2;
// };

// if only 1 line of code inside code block, we can remove the 'return' and '{}'
const calcArea = radius => 3.14 * radius ** 2;

const area = calcArea(5);
console.log('area is:', area);

// practice arrow functions

const greet = () => 'hello, world';
console.log(greet())

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 15, 20], 0.2))
// control flow
// if statement

// const age = 21;
// if (age > 20) {
//     console.log('you are over 20 years old');
// }

// const names = ['mark', 'cark', 'clark', 'dark'];
// if (names.length > 3) {
//     console.log("that's a lot of people");
// }

// logical operators or ||, and &&
// logical not ! to switch boolean values
const password = 'p@234';
if (password.length >= 12 && password.includes('@')) {
    console.log('more than or equal to 12');
} else if (password.length >= 8 || password.includes('@')) {
    console.log('more than or equal to 8');
} else {
    console.log('less than 8');
}

console.log(!true);
// changing css styles
const title = document.querySelector('body > h1')

console.log(title.style);
console.log(title.style.color);

// use camelCase for text-decoration 
title.style.textDecoration = 'line-through';

// remove a property
title.style.margin = '';
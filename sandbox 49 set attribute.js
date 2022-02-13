// setting attributes
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', '#');
link.innerText = 'dead link';

const mssg = document.querySelector('p#hw');
console.log(mssg.getAttribute('id'));

mssg.setAttribute('class', 'newClass');
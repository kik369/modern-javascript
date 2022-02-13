// query selector

const para = document.querySelector('p');
const error = document.querySelector('.error');
const divError = document.querySelector('div.error');
const lorem = document.querySelector('body > div:nth-child(1) > p:nth-child(3)');
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(para);
console.log(error);
console.log(divError);
console.log(lorem);
console.log(paras);
console.log(paras[2]);

paras.forEach(para => {
    console.log(para);
})

console.log(errors);
// const para = document.querySelector('body > div.content > p');

// console.log(para.innerText);

// para.innerText += ' this is my new text';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2> This is a new h2 </h2>';

const people = ['mark', 'cark', 'clark', 'dark', 'stark'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})
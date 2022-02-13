// adding and removing classes

// const content = document.querySelector('body > div.content > p')

// content.classList.add('addedClass');
// content.classList.remove('myClass');

// console.log(content.classList);

const paras = document.querySelectorAll('p');

console.log(paras);

paras.forEach(para => {
    if (para.innerText.includes('error')) {
        para.classList.add('error');
        para.setAttribute('style', 'color: red');
    } else if (para.innerText.includes('success')) {
        para.style.color = 'green';
    }
});


// toggle a class
const title = document.querySelector('.title');
title.classList.toggle('test');
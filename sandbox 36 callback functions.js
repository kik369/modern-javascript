// get a reference to the 'ul'
const ul = document.querySelector('.people');
const people = ['mark', 'cark', 'clark', 'dark', 'stark'];

let html = ``;

people.forEach(person => {
    // create template
    html += `<li>${person}</li>`;
})

console.log(html);
ul.innerHTML = html;
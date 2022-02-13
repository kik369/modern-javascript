// event basics
// click events
// creating and removing elements
// https://developer.mozilla.org/en-US/docs/Web/Events

const button = document.querySelector('button')
const ul = document.querySelector('ul')
button.addEventListener('click', () => {
    // console.log('you clicked me')
    const li = document.createElement('li')
    li.textContent = 'something new'
    ul.append(li)
        // ul.prepend(li)
})

const items = document.querySelectorAll('li')
items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked')
        // console.log(e)
        // e.target.style.textDecoration = 'line-through'
        e.target.remove()
    })
})

// removing an element from the dom
// const ul = document.querySelector('ul')
// ul.remove()
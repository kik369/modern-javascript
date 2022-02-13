// parents, children & siblings

const article = document.querySelector('article')

// can't use foreach on htmlcollection
// have to turn it into an array with Array.from('htmlcollection')
// Array.from() is non destructive

// can use foreach on a node list (queryselectorall)
// can use foreach on an array

console.log(article.children)

console.log(Array.from(article.children))

Array.from(article.children).forEach(child => {
    child.classList.add('article-element')
    console.log(child)
})


const title = document.querySelector('h2')
console.log(title.parentElement)

// can chain together
console.log(title.parentElement.parentElement)

console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

// chaining
console.log(title.nextElementSibling.parentElement.children)
// array methods
// chaining methods

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'orange skin', price: 5 },
    { name: 'red shells', price: 50 }
]

// const filtered = products.filter(products => products.price > 20)
// const promos = filtered.map(product => `The ${product.name} is sold for £${product.price / 2}`)

// does the same as the above
// indent each method
const promos = products
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is sold for £${product.price / 2}`)

console.log(promos)

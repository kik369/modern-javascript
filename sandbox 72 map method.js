// array methods
// map method
// iterates and creates a new array
// non destructive method

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

// 50% off for all products
const salePrices = prices.map(price => price / 2)

console.log(prices)
console.log(salePrices)

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
]

// 50% off only for items over 50
const saleProducts = products.map(product => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 }
    } else {
        return product
    }
})

console.log(products)
console.log(saleProducts)
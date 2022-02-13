// array methods
// filter method
// filter is a non destructive method
// returns an array

const scores = [10, 30, 15, 25, 50, 40, 5]

const filteredScores = scores.filter(score => score > 20)

console.log(scores)
console.log(filteredScores)

const users = [
    { name: 'cark', premium: true },
    { name: 'mark', premium: false },
    { name: 'clark', premium: false },
    { name: 'stark', premium: true },
]

console.log(users)

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)
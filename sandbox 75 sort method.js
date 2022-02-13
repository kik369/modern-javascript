// array methods
// sort method
// destructive method

const names = ['mark', 'cark', 'clark', 'dark', 'stark'];

// by default sorts alphabetically
console.log(names.sort())

const scores = [10, 5, 0, 40, 60, 10, 20, 70]

// only sorts by the first number [0, 10, 10, 20, 40, 5, 60, 70]
console.log(scores.sort())

// reverses the array
console.log(names.reverse())

const players = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'cark', score: 60 },
]

console.log(players.sort((a, b) => {
    if (a.score > b.score) {
        return -1
    } else if (b.score > a.score) {
        return 1
    } else {
        return 0
    }
}))

// does the same thing as the above
players.sort((a, b) => b.score - a.score)

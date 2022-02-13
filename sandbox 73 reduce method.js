// array methods
// reduce method
// can return a single value

const scores = [10, 20, 60, 40, 70, 90, 30]

// accumulator (running total), current
const result = scores.reduce((acc, curr) => {
        if (curr > 50) {
            acc++
        }
        return acc
    }, 0) // the secont argument to the reduce() function is the initial value of acc (0 in this case)

console.log(result)


const scoresToo = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'cark', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'cark', score: 60 }
]

const marioTotal = scoresToo.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score
    }
    return acc
}, 0)

console.log(marioTotal)

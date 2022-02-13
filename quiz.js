const correctAnswers = ['A', 'A', 'B', 'B']

const form = document.querySelector('.quiz-form')
const scoreOutput = document.querySelector('.score')

form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25
        }
    })

    scrollTo(0, 0)

    let output = 0
    const timer = setInterval(() => {
        scoreOutput.innerHTML = `<h4>Your score is <mark>${output}%</mark></h4>`

        if (output === score) {
            clearInterval(timer)
        }
        output++
    }, 10)
})
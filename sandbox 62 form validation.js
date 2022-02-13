const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', e => {
    e.preventDefault()

    // validation
    const username = form.username.value
    const usernamePattern = /^[a-zA-Z]{6,12}$/

    if (usernamePattern.test(username)) {
        feedback.textContent = 'Valid username'
    } else {
        feedback.textContent = 'Not a valid username'
    }
})
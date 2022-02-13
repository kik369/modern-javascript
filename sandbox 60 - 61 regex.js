const form = document.querySelector('.signup-form')
    // const username = document.querySelector('#username')

form.addEventListener('submit', e => {
    e.preventDefault()

    // username is id or name of input field
    console.log(form.username.value)
})

// testing regex
const username = '1carkkk'
const pattern = /^[a-z]{6,}$/
let result = pattern.test(username)
console.log(result)

if (result) {
    console.log('regex test passed')
} else {
    console.log('regex test failed')
}

// returns index of the match
// returns - 1
// if no match
// let result = username.search(pattern)
// console.log(result)
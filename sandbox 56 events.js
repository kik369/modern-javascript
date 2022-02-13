const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
    console.log('content copied')
})

const box = document.querySelector('.box')
box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY)
    box.innerHTML = `X position: ${e.offsetX}<br>Y position: ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
})
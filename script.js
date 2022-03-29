let btn = document.querySelector('#btn')
let text = document.querySelector('#text')

const color = function() {
    btn.style.backgroundColor = text.value
}

btn.addEventListener('click', color)

// 

let e_btn = document.querySelector('#e_btn')
e_btn.style.display = 'none'

// 

let range = document.querySelector('#range')
let circle = document.querySelector('#circle')
let rangeSpan = document.querySelector('#range-span')

const position = function(){
    circle.style.height = range.value + '%'
    circle.style.width = range.value + '%'
    rangeSpan.textContent = event.target.value
}

range.addEventListener('input', position)
console.log(circle);
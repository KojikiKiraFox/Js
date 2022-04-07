'use strict'
let div = document.createElement('div')
let p = document.createElement('p')
let body = document.querySelector('body')
let lft = 0
let tp = 0

var domElement = function (selector, height, width, bg, fontSize, pos) {
    if (0 == selector.indexOf('.')) {
        let str = selector.slice(1)
        div.classList.add(str)
        div.textContent = 'Good Job'
        body.append(div)
        div.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; font-size: ${fontSize}; position: ${pos}`
    } else if (0 == selector.indexOf('#')) {
        let str = selector.slice(1)
        p.id = str
        p.textContent = 'Good Job'
        body.append(p)
    } else {
        console.log('Не правильно');
    }
}
var per = new domElement('.da', '100px', '100px', 'red', '28px', 'absolute')

addEventListener('keydown', function (event){
    if ( event.keyCode == 37){
        lft = lft - 10
        div.style.left = lft + 'px'
    }else if (event.keyCode == 38){   
        tp = tp - 10
        div.style.top = tp + 'px'
    }else if (event.keyCode == 39){
        lft = lft + 10
        div.style.left = lft + 'px'
    }else if (event.keyCode == 40){
        tp = tp + 10
        div.style.top = tp + 'px'
    }
})
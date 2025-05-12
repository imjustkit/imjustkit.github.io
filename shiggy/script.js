const shiggyEl = document.getElementById('shiggys')
const shiggyImg = document.getElementById('shiggyImg')
const hint = document.getElementsByClassName('hint').item(0)

var shiggys = 0
var shiggyProgress = 1

function update() {
    shiggyEl.textContent = shiggys
    shiggyImg.setAttribute('src', 'shiggy-split/' + shiggyProgress + '.gif')
}

function onclick() {
    
    if (shiggyProgress < 10) {
        shiggyProgress += 1
    } else {
        hint.setAttribute('style', 'display: none;')
        shiggyProgress = 1
        shiggys += 1
    }
    update()
}

shiggyImg.addEventListener('click', onclick)
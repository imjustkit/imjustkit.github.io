const shiggyEl = document.getElementById('shiggys')
const shiggyImg = document.getElementById('shiggyImg')

var shiggys = 0
var shiggyProgress = 1

function update() {
    shiggyEl.textContent = shiggys
    shiggyImg.setAttribute('src', 'shiggy-split/' + shiggyProgress + '.gif')
}

setInterval(() => {
    if (shiggyProgress < 10) {
        shiggyProgress += 1
    } else {
        shiggyProgress = 1
        shiggys += 1
    }
    update()
}, 20)
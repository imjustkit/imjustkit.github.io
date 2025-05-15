const shiggyEl = document.getElementById('shiggys')

var shiggys = 0
var shiggyProgress = 1

function update() {
    shiggyEl.textContent = shiggys
}

setInterval(() => {
    if (shiggyProgress < 10) {
        shiggyProgress += 1
    } else {
        shiggyProgress = 1
        shiggys += 1
    }
    update()
}, 5)

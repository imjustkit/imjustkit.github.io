var clicks = 0
var clickpower = 1
var clickmulti = 1

function update() {
    document.getElementById('clickCount').innerHTML = clicks.toPrecision()
}

function clicker() {
    clicks += clickpower * clickmulti
    update()
}
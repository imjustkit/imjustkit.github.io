var clicks = 0
var clickpower = 1
var clickmulti = 1

function clicker() {
    clicks += clickpower * clickmulti
    document.getElementById('clickCount').innerHTML = clicks.toPrecision()
}
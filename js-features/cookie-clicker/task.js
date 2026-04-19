const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let clicks = 0;
let changeSize = false;

cookie.onclick = () => {
    clicks++;
    counter.textContent = clicks;

    if (changeSize) {
        cookie.width = 200;
    } else {
        cookie.width = 180;
    }

    changeSize = !changeSize;
};
let timerStart = document.getElementById("timer");
let time = parseInt(timerStart.textContent);

let interval = setInterval(() => {
    time--;
    timerStart.textContent = time;

    if (time <= 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);
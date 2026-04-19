const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
        } else {
            lostCount++;
            lost.textContent = lostCount;
        }

        if (deadCount === 10) {
            alert('Победа!');
            resetGame();
        }

        if (lostCount === 5) {
            alert('Поражение!');
            resetGame();
        }
    };
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    dead.textContent = 0;
    lost.textContent = 0;
}
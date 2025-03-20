let score = 0;
let timeLeft = 10;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const timerDisplay = document.getElementById("timer");
const box = document.getElementById("box");
const container = document.getElementById("game-container");

function move_box(){
    const maxX = container.clientWidth - box.clientWidth;
    const maxY = container.clientHeight - box.clientHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    box.style.left = x + "px";
    box.style.top = y + "px";
}

function on_click(){
    score++;
    scoreDisplay.textContent = score;
    move_box();
}

function tick(){
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft == 0){
        clearInterval(timer);
        box.style.display = "none";
        timerDisplay.textContent = "Game Over"
    }
}

box.addEventListener("click", on_click);

const timer = setInterval(tick,1000);

setInterval(move_box,1000);
let time = 0;
timer = document.getElementById("timer");

function pad(number) {
    return number < 10 ? `0${number}` : number;
}

function timer_func(interval){
    time += interval;
    const ms = Math.floor((time % 1000)/10);
    const seconds = Math.floor(time/1000);
    const minutes = Math.floor(time/(60000));
    const hours = Math.floor(time/(3600000));

    timer.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(ms)}`;
}

const timerID = setInterval(() => timer_func(50),50);
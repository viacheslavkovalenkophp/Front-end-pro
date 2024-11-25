const start = document.querySelector ('#start');
const stop = document.querySelector ('#stop');
const span = document.querySelector ('#span');

let initialTime =7898;
let IdInitialTime = null;

function controlTime (time) {
    const hours = Math.floor (time / 3600);
    const minutes = Math.floor ((time % 3600) / 60);
    const seconds = time % 60;

   timeHours =  hours.toString ().padStart (2,'0');
    timeMinutes = minutes.toString ().padStart (2,'0');
    timeSeconds = seconds.toString ().padStart (2,'0');

    return `${timeHours}:${timeMinutes}:${timeSeconds}`
}

function timer () {
    if (initialTime > 0) {
        span.textContent = controlTime (initialTime);
        initialTime -= 1;
    } else {
        span.textContent = controlTime (0);
        clearInterval (IdInitialTime);
        IdInitialTime = null;
    }
}

start.addEventListener('click', () => {
    if (!IdInitialTime) {
        IdInitialTime = setInterval(timer, 1000);
}
});

stop.addEventListener ('click', () => {
    if (IdInitialTime) {
        clearInterval (IdInitialTime);
        IdInitialTime = null;
    }
});




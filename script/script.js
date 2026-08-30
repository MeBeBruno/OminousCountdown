const countdownContainer = document.getElementById('countdownContainer');
const countdown = document.getElementById('countdown');
const percentage = document.getElementById('percentage');
const background = document.getElementById('background');

const startDatetime = new Date('2026-04-11T18:34:00').getTime();
const targetDatetime = new Date('2026-10-19T10:00:00').getTime();

setInterval(function() {
    let currentDatetime = new Date().getTime();
    let distance = targetDatetime - currentDatetime;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let milliseconds = Math.floor(distance % 1000);
    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliseconds = milliseconds.toString().padStart(3, '0');
    countdown.innerText = days + ':' + hours + ':' + minutes + ':' + seconds + ',' + milliseconds;

    let percentageFraction = 100 * (currentDatetime - startDatetime) / (targetDatetime - startDatetime);
    percentageFraction = percentageFraction.toFixed(6);
    percentage.innerText = percentageFraction + ' %';

    background.style.width = `${percentageFraction}vw`;
    if ((Math.floor(percentageFraction) == 67) || (Math.floor(percentageFraction) == 69) || Math.floor(percentageFraction) >= 98) {
        background.classList.add('special-background');        
        countdownContainer.classList.add('special-number');
    } else {
        background.classList.remove('special-background');        
        countdownContainer.classList.remove('special-number');
    }
}, 1);
const clock = document.getElementById('clock');
const digitalClock = document.getElementById('digital-clock');
const hourClock = document.querySelector('[data-hour-hand]');
const minuteClock = document.querySelector('[data-minute-hand]');
const secondsClock = document.querySelector('[data-second-hand]');


const setRotation = (element, rotation) => {
    element.style.setProperty('--rotation', rotation * 360);
}

const showTime = () => {
    digitalClock.innerText = moment().format('hh:mm:ss');

    const secondsRatio = parseInt(moment().format('ss')) / 60;
    setRotation(secondsClock, secondsRatio);
    
    const minutesRatio = (secondsRatio + parseInt(moment().format('mm'))) / 60;
    setRotation(minuteClock, minutesRatio);

    const hoursRatio = (minutesRatio + parseInt(moment().format('hh'))) / 60;
    setRotation(hourClock, hoursRatio);
    
    setTimeout(showTime, 1000);
}

showTime();

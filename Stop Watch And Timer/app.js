// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0; // in seconds

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatchButton = document.getElementById('startStopwatch');
const stopStopwatchButton = document.getElementById('stopStopwatch');
const resetStopwatchButton = document.getElementById('resetStopwatch');

startStopwatchButton.addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
            const seconds = String(stopwatchTime % 60).padStart(2, '0');
            stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
});

stopStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

resetStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '00:00:00';
});

// Timer
let timerInterval;
let timerTime = 0; // in seconds

const timerDisplay = document.getElementById('timerDisplay');
const startTimerButton = document.getElementById('startTimer');
const stopTimerButton = document.getElementById('stopTimer');
const resetTimerButton = document.getElementById('resetTimer');
const timerInput = document.getElementById('timerInput');

startTimerButton.addEventListener('click', () => {
    const inputTime = parseInt(timerInput.value);
    if (!isNaN(inputTime) && inputTime > 0) {
        timerTime = inputTime;
        timerDisplay.textContent = formatTime(timerTime);
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                timerTime--;
                if (timerTime <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    timerTime = 0;
                }
                timerDisplay.textContent = formatTime(timerTime);
            }, 1000);
        }
    }
});

stopTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerTime = 0;
    timerDisplay.textContent = '00:00:00';
});

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

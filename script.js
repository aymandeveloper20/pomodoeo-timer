let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let seconds = 0;
let minutes = 25;
let interval;

function startPomodoro() {
  // Clear any existing interval before starting a new one
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(function () {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 0;
        seconds = 0;
        clearInterval(interval);
      }
    }

    updateDisplay();
  }, 1000);
}

function pausePomodoro() {
  clearInterval(interval);
}
function updateDisplay() {
  minutesDisplay.innerHTML = minutes.toString().padStart(2, "0");
  secondsDisplay.innerHTML = seconds.toString().padStart(2, "0");
}
function resetPomodoro() {
  minutes = 25;
  seconds = 59;
  minutesDisplay.innerHTML = "25";
  secondsDisplay.innerHTML = "00";
  clearInterval(interval);
}

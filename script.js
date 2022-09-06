let startingTime = 5;
let time = startingTime * 60;
let timeEl = document.querySelector(".timer");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

if (startingTime < 10) {
  startingTime = "0" + startingTime;
}
min.textContent = startingTime;
sec.textContent = "00";
function timeLeft() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds === 0) {
    seconds = 0 + "0";
  }
  if (minutes < 0) {
    clearInterval(x);
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10 && seconds > 0) {
    seconds = "0" + seconds;
  }
  time--;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}

start.addEventListener("click", function () {
  stop.addEventListener("click", function () {
    clearInterval(x);
  });
  reset.addEventListener("click", function () {
    clearInterval(x);
    min.textContent = startingTime;
    sec.textContent = "00";
    time = startingTime * 60;
  });
  timeLeft();
  var x = setInterval(timeLeft, 1000);
});

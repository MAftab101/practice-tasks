let count = document.querySelector("h1");
let message = document.querySelector(".message");

function counter(event) {
  if (event.target.innerHTML == "increase") {
    count.innerHTML++;
  } else if (event.target.innerHTML == "reset") {
    count.innerHTML = 0;
  } else if (event.target.innerHTML == "decrease") {
    if (Number(count.innerHTML) > 0) {
      count.innerHTML--;
    }
  }
}

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let currentDate = document.querySelector(".date");
function updateClock() {
  let date = new Date();
  currentDate.innerHTML = date;
  let currentHours = date.getHours();
  if (currentHours > 12) {
    currentHours = currentHours - 12;
  }
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();
  hours.innerHTML = currentHours;
  minutes.innerHTML = currentMinutes;
  seconds.innerHTML = currentSeconds;
}
updateClock();
setInterval(updateClock, 1000);

let randomNumber = document.querySelector(".random");
function generateRandomNumber() {
  randomNumber.innerHTML = Math.floor(Math.random() * 1000);
}

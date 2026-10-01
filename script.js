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

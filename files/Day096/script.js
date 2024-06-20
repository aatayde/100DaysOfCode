// Date
let date = document.getElementById("date");
let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.toLocaleString("default", { month: "long" });
console.log(month);

date.innerText = `${month} ${day}`;

// time
function updateClock() {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

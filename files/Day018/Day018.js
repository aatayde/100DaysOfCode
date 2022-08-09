// update time every second
setInterval(function() {

var now = new Date().getTime()
console.log("current time :", now)

var targetTime = new Date("Oct 29, 2022 10:00:00").getTime()
console.log("target Time: ", targetTime)

// calculate current time from target date
var difference = targetTime - now

var seconds = Math.floor((difference % (60 * 1000))/ 1000);
console.log("seconds : ", seconds)

var minutes = Math.floor((difference % (60 * 60 * 1000) / (1000 * 60)))
console.log("Minutes :", minutes)

var hours = Math.floor(difference % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
console.log("Hours :", hours)

var days = Math.floor(difference / (1000 * 60 * 60 * 24))
console.log("Days :", days)
// update 
document.getElementById('time').innerText = "Days : " + days + " Hours : " + hours + " Minutes : " + minutes + " Seconds : " + seconds;

}, 1000);

// testing
// console.log("difference :", difference)
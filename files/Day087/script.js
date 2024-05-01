function timeSinceBirthDate() {
  const birthday = new Date("1993-04-13T09:38:00");
  console.log(birthday);

  const now = new Date();
  console.log(now);

  // get the difference of birthday & current time
  let difference = now - birthday;
  console.log(difference);

  // seconds
  var seconds = Math.floor((difference / 1000) % 60);
  console.log("Seconds", seconds);

  // minutes
  var minutes = Math.floor((difference / 1000 / 60) % 60);
  console.log("Minutes", minutes);

  // hours
  var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  console.log("Hours", hours);

  // days
  var days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
  console.log("Days", days);

  // years
  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  console.log("Year", years);

  return `Years ${years} - Days ${days} - Hours ${hours} - Minutes ${minutes} - Seconds ${seconds}`;
}

function updateTime() {
  document.getElementById("time").innerText = timeSinceBirthDate();
}

setInterval(updateTime, 1000);

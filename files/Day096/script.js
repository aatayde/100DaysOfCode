// Date
let date = document.getElementById("date");
let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.toLocaleString("default", { month: "long" });
console.log(month);

date.innerText = `${month} ${day}`;

// time

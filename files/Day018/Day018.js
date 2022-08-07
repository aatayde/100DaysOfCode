const time = document.getElementById('time')


function updateTime(){
    // display time
    time.innerText = Date()
}

// update time every second
setInterval(updateTime, 1000);

// testing
// console.log(Date())
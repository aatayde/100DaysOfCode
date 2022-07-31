function getCPUCores(){
    document.getElementById("cpuCores").innerText = window.navigator.hardwareConcurrency
}

function sendAlert(){
    window.alert("Hello, World!")
}

function getURL(){
    document.getElementById("url").innerText = document.URL
}
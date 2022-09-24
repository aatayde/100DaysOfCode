let heading = document.getElementById("heading")
let logDog = localStorage.getItem('myDog');

function save(){
    dogName = document.getElementById("dog").value
    localStorage.setItem('myDog', dogName);
    log()
}

function remove(){
    localStorage.removeItem('myDog');
    log()
}

function log(){
    logDog = localStorage.getItem('myDog');
    heading.innerText = logDog;
    
    console.log(localStorage)
}

window.addEventListener('load', (e) => {
    // logDog = localStorage.getItem('myDog');
    heading.innerText = logDog;
    console.log("loading heading from localStorage")
})


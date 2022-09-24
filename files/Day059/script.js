let heading = document.getElementById("heading")

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
    let logDog = localStorage.getItem('myDog');
    heading.innerText = logDog;
    
    console.log(localStorage)
}
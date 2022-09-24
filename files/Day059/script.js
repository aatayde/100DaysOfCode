
function save(){
    dogName = document.getElementById("dog").value
    localStorage.setItem('myDog', dogName);
}

function remove(){
    localStorage.removeItem('myDog');
}

function log(){
    console.log(localStorage)
}
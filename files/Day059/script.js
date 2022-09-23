
function save(){
    dogName = document.getElementById("dog").value

    localStorage.setItem('myDog', dogName);
    console.log(localStorage)
}
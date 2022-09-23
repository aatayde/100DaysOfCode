console.log("Hello World!")

const power = Number(document.getElementById("power").value);
const storage = Number(document.getElementById("storage").value);


function clicked(){
    document.getElementById("minutes").innerText = ((storage/power) * 60);
    
}
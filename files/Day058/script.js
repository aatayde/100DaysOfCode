function clicked(){
    const power = Number(document.getElementById("power").value);
    const storage = Number(document.getElementById("storage").value);
    document.getElementById("minutes").innerText = ((storage/power) * 60);
    
}
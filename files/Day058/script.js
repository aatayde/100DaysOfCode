console.log("Hello World!")

const power = Number(document.getElementById("power").value);
const storage = Number(document.getElementById("storage").value);


function clicked(){
    // This is not showing up an alert messages when clicked

    console.log(typeof(storage))
    console.log(typeof(power))
    console.log(power+storage)
}
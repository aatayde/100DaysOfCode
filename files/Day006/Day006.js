console.log("hello world!")

const initialValue = Number(document.getElementById("initialValue"));
console.log(initialValue)
const finalValue = Number(document.getElementById("finalValue"));
console.log(finalValue)
// const relativeChange = (((finalValue - initialValue) / initialValue) * 100)

function relativeChange(finalValue, initialValue){
    document.getElementById('answer').innerText = (((finalValue - initialValue) / initialValue) * 100) + "%";
    console.log((((finalValue - initialValue) / initialValue) * 100))
}
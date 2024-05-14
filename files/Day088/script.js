let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let output = document.getElementById("output");

console.log(num1);
console.log(num2);

// add event listener
num1.addEventListener("input", updateOutput);
num2.addEventListener("input", updateOutput);

// function to update the output field
function updateOutput() {
  // calculate the difference
  let difference = parseInt(num1.value, 10) - parseInt(num2.value, 10);

  if (difference > 0) {
    // apply green text font
    output.setAttribute("style", "color: #19C870");
  } else {
    output.setAttribute("style", "color: #D22B2B");
  }
  output.innerText = difference;
}

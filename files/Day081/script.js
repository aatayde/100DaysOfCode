// test script file is loading
console.log("script loaded");

// test button is working
const button = document.querySelector(".btn");
button.addEventListener("click", function (e) {
  console.log("button pressed");

  // change button
  // if (button.innerText == "+") {
  //   console.log("button changed");
  //   button.innerText = "-";
  // } else {
  //   button.innerText = "+";
  // }
});

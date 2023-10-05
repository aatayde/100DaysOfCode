// select all section classes
const hiddenElements = document.querySelectorAll(".hidden");
// lets confirm we have 3 sections with the class hidden
console.log(hiddenElements);
// confirmed! working as intended

// copy & paste code from MDN
// observe entires intersecting the observer
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry); // log entires
    // declare if entry is intersecting
    if (entry.isIntersecting) {
      console.log("animate element");
    } else {
      console.log("hide element");
    }
  });
});

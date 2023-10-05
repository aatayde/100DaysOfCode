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
      // add show class
      entry.target.classList.add("show");
    } else {
      // remove show class
      entry.target.classList.remove("show");
    }
    // Currently not observing
  });
});

// lets start observing each element in hidden elements
// observe each hidden element with the observe method
hiddenElements.forEach((el) => observer.observe(el));
// Success this works!
// Each elemet is being observed by the DOM

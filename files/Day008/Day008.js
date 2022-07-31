const title = document.getElementById('title');
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

// console.log("is dark mode?", isDarkMode.matches)
changeText(isDarkMode)
// Add event listener that checks for changes in color prefers


// Check if dark mode is ture
// if (isDarkMode) {
//     title.innerText = "Dark Mode"
// } else {
//     title.innerText = "Light Mode"
// }

// ternary shorthand | conditional shorthand
function changeText(e){
    return (e.matches ? title.innerText = "Dark Mode" : title.innerText = "Light Mode")
}


// (function (e) {
//     return e.matches
// })

// addEventListener(isDarkMode, changeText())
// isDarkMode.addEventListener(e => e.matches && changeText())
// window.matchMedia("(prefers-color-scheme: dark)").addListener(
//     e => e.matches && activateDarkMode() // listener
//   );

// IT WORKED
isDarkMode.addEventListener("change", e => {
    changeText(e)
})
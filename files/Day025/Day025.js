console.log("hello world!")

function addElement(){

    // Create new div
   const newDiv =  document.createElement("div")

    // Give div content
    const newContent = document.createTextNode("Hello, World!")

    // Add text to new div
    newDiv.appendChild(newContent)

    // Add new div & its content into the DOM
    const currentElement = document.getElementById('title');
    document.body.insertBefore(newDiv, currentElement)
}


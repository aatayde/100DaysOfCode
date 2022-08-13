navigator.clipboard.readText().then(
    (clipText) => document.getElementById("title").innerText = clipText);
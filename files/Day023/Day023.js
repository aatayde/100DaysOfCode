function clipboard(){
    const copyText = document.getElementById('inputText')

    // Select Text Feild
    copyText.select()

    // Copy Text to Clipboard
    navigator.clipboard.writeText(copyText.value);

    // DisplayText
    alert("Copied Text: " + copyText.value);
}
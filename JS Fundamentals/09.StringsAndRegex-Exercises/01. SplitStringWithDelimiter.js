function splitString(string, delimiter) {
    let splittedText = string.split(delimiter);
    for (let i = 0; i < splittedText.length; i++) {
        console.log(splittedText[i]);
    }
}
// splitString('One-Two-Three-Four-Five', '-');
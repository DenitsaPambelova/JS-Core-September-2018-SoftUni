function startsWith(string, substingStarts) {
    if (string.substr(0) == substingStarts) {
        console.log(true);
    } else {
        console.log(false);
    }
}
startsWith('How have you been?', 'how');
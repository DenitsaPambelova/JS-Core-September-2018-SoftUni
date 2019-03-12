function endsWith(string, substingEnd) {
    if (string.endsWith(substingEnd)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
endsWith('This sentence ends with fun?', 'fun?');
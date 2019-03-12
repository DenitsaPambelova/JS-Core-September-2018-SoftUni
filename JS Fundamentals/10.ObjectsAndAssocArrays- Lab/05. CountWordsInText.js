function countWords(arr) {
    let splitArr = arr[0].split(/\W+/).filter(e => e != "");
    let wordCounter = {};
    for (let word of splitArr) {
        if (!wordCounter.hasOwnProperty(word)) {
            wordCounter[word] = 1;
        } else {
            wordCounter[word]++;
        }
    }
    console.log(JSON.stringify(wordCounter));
}
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);
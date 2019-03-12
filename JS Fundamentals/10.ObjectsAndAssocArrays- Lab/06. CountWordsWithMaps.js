function wordCounter(arr) {
    arr = arr.join("\n").toLowerCase();
    let splitText = arr.split(/\W+/).filter(e => e != "");
    let wordCount = new Map();

    for (let word of splitText) {
        word = word;
        wordCount.has(word) ? wordCount.set(word, wordCount.get(word) + 1) : wordCount.set(word, 1);
    }
    let result = new Map([...wordCount.entries()].sort());
    for (let [key, value] of result) {
        console.log(`'${key}' -> ${value} times`);

    }
}

wordCounter(["Far too slow, you're far too slow."]);
function wordOccurences(sentences, word) {
    let pattern = new RegExp(`\\b${word}\\b`, "gi");
    if (sentences.match(pattern) != null) {
        console.log(sentences.match(pattern).length);
    } else {
        console.log(0);
    }
}
wordOccurences('The waterfall was so high, that the child couldn’t see its peak.',
    'the');
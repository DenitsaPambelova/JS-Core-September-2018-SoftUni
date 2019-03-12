function sortArray(array) {
    function compare(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    console.log(array.sort(compare).join('\n'));
}

// sortArray(['alpha',
//     'beta',
//     'gamma'
// ]);
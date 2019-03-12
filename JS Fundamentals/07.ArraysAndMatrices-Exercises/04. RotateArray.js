function rotateArray(input) {
    let rotation = +input.pop();
    let n = rotation % input.length;
    for (let i = 0; i < n; i++) {
        let first = input.pop(input[i]);
        input.unshift(first);

    }
    console.log(input.join(" "));
}
// rotateArray(['1',
//     '2',
//     '3',
//     '4',
//     '2'
// ]);
// rotateArray(['Banana',
//     'Orange',
//     'Coconut',
//     'Apple',
//     '15'
// ]);
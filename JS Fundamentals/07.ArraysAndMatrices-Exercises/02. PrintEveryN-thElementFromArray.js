function printEveryElement(input) {
    let n = Number(input.pop());
    for (let i = 0; i < input.length; i += n) {
        console.log(input[i]);
    }
}
// printEveryElement(['5',
//     '20',
//     '31',
//     '4',
//     '20',
//     '2'
// ]);
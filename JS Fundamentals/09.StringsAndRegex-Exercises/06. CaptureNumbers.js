function captureNumber(array) {
    let pattern = /[0-9]+/gm;
    console.log(array.join('').match(pattern).join(" "));
}
captureNumber(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);
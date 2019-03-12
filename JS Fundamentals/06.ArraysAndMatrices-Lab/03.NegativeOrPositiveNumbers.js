function negativePositiveNumber(input) {
    let result = [];
    for (let i of input) {
        if (i < 0) {
            result.unshift(i);
        } else {
            result.push(i);
        }
    }
    console.log(result.join('\n'));
}
// negativePositiveNumber([7, -2, 8, 9]);
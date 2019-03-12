function smallest2Elements(input) {
    input.sort((a, b) => a - b);
    let result = input.slice(0, 2);
    return result.join(' ');
}
// console.log(smallest2Elements([30, 15, 50, 5]));
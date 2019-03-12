function roundingTheNumber(input) {
    let number = Number(input[0]);
    let precision = input[1] <= 15 ? input[1] : 15;

    let result = parseFloat(number.toFixed(precision));
    console.log(result);
}
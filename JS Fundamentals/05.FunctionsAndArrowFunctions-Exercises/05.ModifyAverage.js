function avarageNumber(input) {

    let numberAsString = input.toString();
    let finalSum = sumDigits(numberAsString);

    function sumDigits(input) {
        let sumDigit = 0;
        for (let digit of input) {
            sumDigit += +digit;
        }
        return sumDigit;
    }
    let avarageNumber = finalSum / numberAsString.length;

    while (avarageNumber <= 5) {
        numberAsString += '9';
        finalSum = sumDigits(numberAsString);
        avarageNumber = finalSum / numberAsString.length;
    }
    console.log(numberAsString);

}
// avarageNumber(101);
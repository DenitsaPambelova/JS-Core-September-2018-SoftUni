function isOddOrEven(inputStr) {
    if (typeof inputStr !== 'string') {
        return undefined;
    }

    if (inputStr.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

/** UNIT TESTING */
let expect = require("chai").expect;

describe("isOddOrEven", function () {
    it("with a number parameter, should return undefined", function () {
        //Arrange
        let number = 13;
        //Act
        let actual = isOddOrEven(number);
        let expected = undefined;
        //Assert
        // assert.strictEqual(actual, expected, "Was expected result to be undefined");
        expect(actual).to.equal(expected, "Function did not return the correct result!")
    });

    it("with a object parameter, should return undefined", function () {
        //Arrange
        let obj = {name: "Someone"};
        //Act
        let actual = isOddOrEven(obj);
        let expected = undefined;
        //Assert
        // assert.strictEqual(actual, expected, "Was expected result to be undefined");
        expect(actual).to.equal(expected, "Function did not return the correct result!")
    });

    it("with an even length str, should return correct result", function () {
        //Arrange
        let evenLengthStr = "Roar";
        //Act
        let actual = isOddOrEven(evenLengthStr);
        let expected = "even";
        //Assert
        // assert.equal(actual, expected, "Function did not return the correct result!");
        expect(actual).to.equal(expected, "Function did not return the correct result!")
    });

    it("with an odd length str, should return correct result", function () {
        //Arrange
        let evenLengthStr = "dog";
        //Act
        let actual = isOddOrEven(evenLengthStr);
        let expected = "odd";
        //Assert
        // assert.equal(actual, expected, "Function did not return the correct result!");
        expect(actual).to.equal(expected, "Function did not return the correct result!")
    });

    it("with a multiple consecutive checks, should return correct values", function () {
        expect(isOddOrEven("cat")).to.equal("odd", "Function did not return the correct result!");
        expect(isOddOrEven("an")).to.equal("even", "Function did not return the correct result!");
        expect(isOddOrEven("a")).to.equal("odd", "Function did not return the correct result!");
        expect(isOddOrEven("datergts")).to.equal("even", "Function did not return the correct result!");
        expect(isOddOrEven("something")).to.equal("odd", "Function did not return the correct result!");
    })
});
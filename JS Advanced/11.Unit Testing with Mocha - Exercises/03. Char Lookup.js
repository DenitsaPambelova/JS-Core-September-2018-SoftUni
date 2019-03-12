function lookupChar(inputStr, index) {
    if (typeof(inputStr) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (inputStr.length <= index || index < 0) {
        return "Incorrect index";
    }

    return inputStr.charAt(index);
}

/** UNIT TESTING */
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("lookupChar function Tests", function () {
    describe("Tests passed parameters", function () {
        //If the first parameter is not a string or the second parameter
        //is not an integer - return undefined
        it("If the first parameter is not a string should return undefined", function () {
            //Arrange
            let firstParam = 5;
            let secondParam = 3;
            //Act
            let actual = lookupChar(firstParam, secondParam);
            //Assert
            assert.isUndefined(actual);
        });

        it("If first parameter is an array should return undefined", function () {
            //Arrange
            let firstParam = [];
            let secondParam = 3;
            //Act
            let actual = lookupChar(firstParam, secondParam);
            //Assert
            assert.isUndefined(actual);
        });

        it("If first parameter is an object should return undefined", function () {
            //Arrange
            let firstParam = {string: "Pesho"};
            let secondParam = 3;
            //Act
            let actual = lookupChar(firstParam, secondParam);
            //Assert
            assert.isUndefined(actual);
        });

        it("If the second parameter is not an integer should return undefined", function () {
            //Arrange
            let firstParam = "some string";
            let secondParam = "2";
            //Act
            let actual = lookupChar(firstParam, secondParam);
            //Assert
            assert.isUndefined(actual);
        });

        it("If the second parameter is a floating point should return undefined", function () {
            //Arrange
            let firstParam = "some string";
            let secondParam = 1.23;
            //Act
            let actual = lookupChar(firstParam, secondParam);
            //Assert
            assert.isUndefined(actual);
        });

        it("If the second parameter is an array should return undefined", function () {
            //Arrange
            let firstParam = "some string";
            let secondParam = [1, 2, 3];
            //Act
            let actual = lookupChar(firstParam, secondParam);
            //Assert
            assert.isUndefined(actual);
        });
    });

    describe("Tests for incorrect index", function () {
        //If both parameters are of the correct type, but the value of the index
        //is incorrect (bigger than or equal to the string length or a negative
        //number) - return the text "Incorrect index".
        it("If index is bigger than str.length should return message for incorrect", function () {
            //Arrange
            let inputStr = "string";
            let index = 7;
            //Act
            let actual = lookupChar(inputStr, index);
            let expected = "Incorrect index";
            //Assert
            assert.equal(actual, expected);
        });

        it("If index is equal than str.length should return message for incorrect", function () {
            //Arrange
            let inputStr = "string";
            let index = inputStr.length;
            //Act
            let actual = lookupChar(inputStr, index);
            let expected = "Incorrect index";
            //Assert
            assert.equal(actual, expected);
        });

        it("If index is negative should return message for incorrect", function () {
            //Arrange
            let inputStr = "string";
            let negativeIndex = -2;
            //Act
            let actual = lookupChar(inputStr, negativeIndex);
            let expected = "Incorrect index";
            //Assert
            assert.equal(actual, expected);
        });
    });

    describe("Test return value - char at the specified index in the string", function () {
        //If both parameters have correct types and values - return the
        //character at the specified index in the string.
        it("If both parameters are correct should return char at the specific index", function () {
            //Arrange
            let inputStr = "string";
            let index = 3;
            //Act
            let actual = lookupChar(inputStr, index);
            let expected = inputStr.charAt(index);
            //Assert
            assert.equal(actual, expected);
        });

        it("If both parameters are correct", function () {
            assert.equal(lookupChar("something", 2), 'm');
            assert.equal(lookupChar("a", 0), 'a');
            assert.equal(lookupChar("something", 8), 'g');
            assert.equal(lookupChar("asdasd", 4), 's');
            assert.equal(lookupChar("ko rechi", 2), ' ');
        });
    });
});
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

/** UNIT TESTING */
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("mathEnforced", function () {
    describe("addFive", function () {
        it('with a non-number parameter, should return undefined', function () {
            //Arrange
            let nonNumber = 'string';
            //Act
            let actual = mathEnforcer.addFive(nonNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with passed null, should return undefined', function () {
            //Arrange
            let nonNumber = null;
            //Act
            let actual = mathEnforcer.addFive(nonNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with a number parameter, should return correct result', function () {
            //Arrange
            let nonNumber = 5;
            //Act
            let actual = mathEnforcer.addFive(nonNumber);
            let expected = nonNumber + 5;
            //Assert
            assert.equal(actual, expected)
        });

        it('with a floating point number parameter, should return correct result', function () {
            //Arrange
            let nonNumber = 2.55;
            //Act
            let actual = mathEnforcer.addFive(nonNumber);
            let expected = nonNumber + 5;
            //Assert
            assert.closeTo(actual, expected, 0.01);
        });

        it('with a negative number parameter, should return correct result', function () {
            //Arrange
            let nonNumber = -55;
            //Act
            let actual = mathEnforcer.addFive(nonNumber);
            let expected = nonNumber + 5;
            //Assert
            assert.equal(actual, expected)
        });
    });

    describe("subtractTen", function () {
        it('with a non-number parameter, should return undefined', function () {
            //Arrange
            let nonNumber = 'string';
            //Act
            let actual = mathEnforcer.subtractTen(nonNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with passed null, should return undefined', function () {
            //Arrange
            let nonNumber = null;
            //Act
            let actual = mathEnforcer.subtractTen(nonNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with a number parameter, should return correct result', function () {
            //Arrange
            let nonNumber = 15;
            //Act
            let actual = mathEnforcer.subtractTen(nonNumber);
            let expected = nonNumber - 10;
            //Assert
            assert.equal(actual, expected)
        });

        it('with a floating point number parameter, should return correct result', function () {
            //Arrange
            let nonNumber = 12.55;
            //Act
            let actual = mathEnforcer.subtractTen(nonNumber);
            let expected = nonNumber - 10;
            //Assert
            assert.closeTo(actual, expected, 0.01);
        });

        it('with a negative number parameter, should return correct result', function () {
            //Arrange
            let nonNumber = -55;
            //Act
            let actual = mathEnforcer.subtractTen(nonNumber);
            let expected = nonNumber - 10;
            //Assert
            assert.equal(actual, expected)
        });
    });

    describe("sum", function () {
        it('with a non-number first parameter, should return undefined', function () {
            //Arrange
            let firstNumber = 'string';
            let secondNumber = 10;
            //Act
            let actual = mathEnforcer.sum(firstNumber, secondNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with a array second parameter, should return undefined', function () {
            //Arrange
            let firstNumber = 5;
            let secondNumber = [];
            //Act
            let actual = mathEnforcer.sum(firstNumber, secondNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with a invalid parameters, should return undefined', function () {
            //Arrange
            let firstNumber = null;
            let secondNumber = [];
            //Act
            let actual = mathEnforcer.sum(firstNumber, secondNumber);
            //Assert
            assert.isUndefined(actual);
        });

        it('with a valid parameters, should return correct result', function () {
            //Arrange
            let firstNumber = 10;
            let secondNumber = 3;
            //Act
            let actual = mathEnforcer.sum(firstNumber, secondNumber);
            let expected = firstNumber + secondNumber;
            //Assert
            assert.equal(actual, expected);
        });

        it('with a floating point first parameter, should return correct result', function () {
            //Arrange
            let firstNumber = 5.55;
            let secondNumber = 3;
            //Act
            let actual = mathEnforcer.sum(firstNumber, secondNumber);
            let expected = firstNumber + secondNumber;
            //Assert
            assert.closeTo(actual, expected, 0.01);
        });

        it('with a floating point parameters, should return correct result', function () {
            //Arrange
            let firstNumber = 5.55;
            let secondNumber = 3.45;
            //Act
            let actual = mathEnforcer.sum(firstNumber, secondNumber);
            let expected = firstNumber + secondNumber;
            //Assert
            assert.closeTo(actual, expected, 0.01);
        });
    });
});

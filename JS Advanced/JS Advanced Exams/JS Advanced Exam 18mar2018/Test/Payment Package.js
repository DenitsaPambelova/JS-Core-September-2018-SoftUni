let expect = require('chai').expect;
class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this._VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe("Payment Package", function () {
    describe("constructor", function () {
        it('should return true', function () {
            let p = new PaymentPackage("test", 100);
            expect(p instanceof PaymentPackage).to.equal(true)
        });
        it('should create correct property', function () {
            let p = new PaymentPackage("test", 50);
            expect(p.hasOwnProperty("_name")).to.be.true;
            expect(p.hasOwnProperty("_value")).to.be.true;
            expect(p.hasOwnProperty("_VAT")).to.be.true;
            expect(p.hasOwnProperty("_active")).to.be.true;
        });
        it('should have correct values', function () {
            let p = new PaymentPackage("test", 60.5);
            expect(p.name).to.equal("test");
            expect(p.value).to.closeTo(60.5, 0.01);
            expect(p._VAT).to.closeTo(20, 0.01);
            expect(p.active).to.equal(true);
            expect(p._active).to.equal(true);
            expect(p.VAT).to.greaterThan(1);
            expect(p._VAT).to.greaterThan(1);
            expect(p.value).to.greaterThan(50);
            expect(p._value).to.greaterThan(50);
        });
        it('should throw error when initialization with incorrect values', function () {
            let p;
            expect(() => p = new PaymentPackage(123, 123)).to.throw(Error);
            expect(() => p = new PaymentPackage("correct", "asd")).to.throw(Error);
            expect(() => p = new PaymentPackage([], 10.50)).to.throw(Error);
            expect(() => p = new PaymentPackage(null, 60.50)).to.throw(Error);
            expect(() => p = new PaymentPackage("ttt", {})).to.throw(Error);
            expect(() => p = new PaymentPackage("tttt", new Date(2010, 10, 10))).to.throw(Error);
            expect(() => p = new PaymentPackage(null, null)).to.throw(Error);
            expect(() => p = new PaymentPackage(undefined, undefined)).to.throw(Error);
            expect(() => p = new PaymentPackage("ok")).to.throw(Error);
            expect(() => p = new PaymentPackage("", 123)).to.throw(Error);
            expect(() => p = new PaymentPackage("asd", -1)).to.throw(Error);
            expect(() => p = new PaymentPackage("asd", -50)).to.throw(Error);
            expect(() => p = new PaymentPackage("", -2)).to.throw(Error);
        });
    });
    describe('name', function () {
        it('should create instance with correct name', function () {
            let p = new PaymentPackage("pesho", 10);
            expect(p.name).to.equal("pesho");
            expect(p._name).to.equal("pesho");
            expect(p.hasOwnProperty("_name")).to.equal(true)
        });
    });
    describe("value", function () {
        it('should create instance with correct values', function () {
            let p = new PaymentPackage("pesho", 10);
            expect(p.value).to.closeTo(10, 0.01);
            expect(p._value).to.closeTo(10, 0.01);
            expect(p.hasOwnProperty("_value")).to.equal(true)
        });
        it('should create instance with correct values', function () {
            let p = new PaymentPackage("pesho", 0.5);
            expect(p.value).to.closeTo(0.5, 0.001);
            expect(p._value).to.closeTo(0.5, 0.001);
            expect(p.hasOwnProperty("_value")).to.equal(true)
        });
        it('should throw error', function () {
            let p = undefined;
            expect(() => p = new PaymentPackage("abc", -10)).to.throw(Error)
        });
    });
    describe('VAT', function () {
        let p;
        beforeEach(function () {
             p = new PaymentPackage("abc", 10);
        });
        it("should have default property VAT with default value", function () {
            expect(p._VAT).to.be.closeTo(20, 0.01);
            expect(p._VAT).to.be.closeTo(20, 0.01);
            expect(p.hasOwnProperty("_VAT")).to.be.true;
        });
        it("should change value for correct input for VAT 30", function () {
            p._VAT = 30;
            expect(p._VAT).to.be.closeTo(30, 0.01);
        });
        it("should change value for correct input for VAT 10.5", function () {
            p._VAT = 10.5;
            expect(p._VAT).to.be.closeTo(10.5, 0.001);
        });
        it("should change value for correct input for VAT 0", function () {
            p._VAT = 0;
            expect(p._VAT).to.be.closeTo(0, 0.001);
        });
        it("should throw error for invalid values for VAT", function () {
            expect(() => p.VAT = -1).to.throw(Error);
            expect(() => p.VAT = -0.1).to.throw(Error);
            expect(() => p.VAT = -0.0001).to.throw(Error);
            expect(() => p.VAT = []).to.throw(Error);
            expect(() => p.VAT = {}).to.throw(Error);
            expect(() => p.VAT = "asd").to.throw(Error);
            expect(() => p.VAT = null).to.throw(Error);
            expect(() => p.VAT = undefined).to.throw(Error);
        })
    });
    describe("active", function () {
        let p = null;
        beforeEach(function () {
            p = new PaymentPackage("abc", 10);
        });

        it("should have default value when instantiated", function () {
            expect(p.active).to.be.true;
            expect(p._active).to.be.true;
            expect(p.hasOwnProperty("_active")).to.be.true;
        });

        it("should change value for correct input", function () {
            p.active = false;
            expect(p.active).to.be.false;
            expect(p._active).to.be.false;
            p.active = true;
            expect(p.active).to.be.true;
            expect(p._active).to.be.true;
            p.active = false;
            p.active = true;
            p.active = false;
            expect(p.active).to.be.false;
            expect(p._active).to.be.false;
        });
        it("should throw error for invalid values for active", function () {
            expect(() => p.active = -11).to.throw(Error);
            expect(() => p.active = -0.1).to.throw(Error);
            expect(() => p.active = -0.0001).to.throw(Error);
            expect(() => p.active = []).to.throw(Error);
            expect(() => p.active = {}).to.throw(Error);
            expect(() => p.active = "asd").to.throw(Error);
            expect(() => p.active = null).to.throw(Error);
            expect(() => p.active = undefined).to.throw(Error);
        });
    });

    describe("toString", function () {
        it("should return correct value for ('asdasd', 500)", function () {
            let p = new PaymentPackage("asdasd", 500);
            let expectedText = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });
        it("should return correct value for ('heyheyhey', 0.5)", function () {
            let p = new PaymentPackage("heyheyhey", 0.5);
            let expectedText = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p._VAT}%): ${p.value * (1 + p._VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });
        it("should return correct value for ('h', 5000)", function () {
            let p = new PaymentPackage("h", 5000);
            let expectedText = [
                `Package: ${p.name}` + '',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p._VAT}%): ${p.value * (1 + p._VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });

        it("should return correct value for ('h', 5000) inactive", function () {
            let p = new PaymentPackage("h", 5000);
            p.active = false;
            p.active = true;
            p.active = false;
            let expectedText = [
                `Package: ${p.name}` + ' (inactive)',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p._VAT}%): ${p.value * (1 + p._VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });
        it("should return correct value for ('123123123', 123) inactive", function () {
            let p = new PaymentPackage("123123123", 123);
            p.active = false;
            p.active = true;
            p.active = false;
            let expectedText = [
                `Package: ${p.name}` + ' (inactive)',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p._VAT}%): ${p.value * (1 + p._VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });
        it("should return correct value for ('123123123', 0.9) inactive", function () {
            let p = new PaymentPackage("123123123", 0.9);
            p.active = false;
            p.active = true;
            p.active = false;
            let expectedText = [
                `Package: ${p.name}` + ' (inactive)',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p._VAT}%): ${p.value * (1 + p._VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });
        it("should return correct value for ('0', 0) inactive", function () {
            let p = new PaymentPackage("0", 0);
            p.active = false;
            p.active = true;
            p.active = false;
            let expectedText = [
                `Package: ${p.name}` + ' (inactive)',
                `- Value (excl. VAT): ${p.value}`,
                `- Value (VAT ${p._VAT}%): ${p.value * (1 + p._VAT / 100)}`
            ].join("\n");
            let actualText = p.toString();

            expect(actualText).to.be.equal(expectedText);
        });
    });
});
let expect = require("chai").expect;
let PaymentPackage = require("./class").PaymentPackage;

describe("PaymentPackage unit testing", function () {
    let package;
    beforeEach(function () {
        package = new PaymentPackage("Test fee", 2000);
    });
    describe('test if class is valid', () => {
        it('if it has name prop', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.equal(true);
        });
        it('if it has value prop', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.equal(true);
        });
        it('if it has VAT prop', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.equal(true);
        });
        it('if it has active prop', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.equal(true);
        });
        it('if it has toString prop', () => {
            expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });
    describe("test all ERROR cases", () => {
        it('name must be of type string', () => {
            expect(() => new PaymentPackage({}, 0)).throw(Error, "Name must be a non-empty string");
        });
        it("should throw a new error for an empty string", () => {
            expect(() => new PaymentPackage("", 2202)).throw(Error, "Name must be a non-empty string")
        });
        it('value must be a number', () => {
            expect(() => new PaymentPackage("empty", "must be a number")).throw(Error, "Value must be a non-negative number")
        });
        it('should throw a new error for negative number', () => {
            expect(() => new PaymentPackage("non-empty string", -22)).throw(Error, "Value must be a non-negative number")

        });
        it('should throw a new error for negative VAT', () => {
            expect(() => package.VAT = -1).throw(Error, "VAT must be a non-negative number")
        });
        it('should throw a new error passing non number', () => {
            expect(() => package.VAT = "").throw(Error, "VAT must be a non-negative number")
        });
        it('throw a error for passing "active" typeof != boolean', () => {
            expect(() => package.active = null).throw(Error, 'Active status must be a boolean')
        });
    });
    describe("correct cases", () => {
        it('should return the correct name from the getter', () => {
            package = new PaymentPackage("kim-chen-un", 1500);
            expect(package.name).to.be.equal("kim-chen-un")
        });
        it('should set a new name from the setter', () => {
            package.name = "Donald Trump";
            expect(package.name).to.be.equal("Donald Trump")
        });

        it('should get the value from the getter', () => {
            package = new PaymentPackage("Service", 0);
            expect(package.value).to.be.equal(0);
        });
        it('should set a new value from the setter', () => {
            package.value = 11;
            expect(package.value).to.be.equal(11)
        });
        it('should return the default value of VAT', () => {
            expect(package.VAT).to.be.equal(20)
        });
        it('should set different VAT value', () => {
            package.VAT = 33;
            expect(package.VAT).to.be.equal(33);
        });
        it('should return the default value of active', () => {
            expect(package.active).to.be.true;
        });
        it('should set a false value for active', () => {
            package.active = false;
            expect(package.active).to.be.false;
        });
        it('should print the final result', () => {
            let result = package.toString();
            expect(result).to.be.equal('Package: Test fee' + "\n" + '- Value (excl. VAT): 2000' + "\n" + '- Value (VAT 20%): 2400');
        });
        it('should print the final result with non active package', () => {
            package.active = false;
            expect(package.toString()).to.be.equal('Package: Test fee' + " (inactive)" + "\n" + '- Value (excl. VAT): 2000' + "\n" + '- Value (VAT 20%): 2400');
        });
    });
});
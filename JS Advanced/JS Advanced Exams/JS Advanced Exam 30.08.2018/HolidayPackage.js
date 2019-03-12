let expect = require('chai').expect;


class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

/** Unit Tests */





describe("Holiday Package Tests", function () {
    let holidayPackage;
    beforeEach(function () {
        holidayPackage = new HolidayPackage("Italy", "Summer");
    });

    describe("No vacationers tests", function () {

        it('should return no vacationers message if vacationer not added', function () {
            expect(holidayPackage.showVacationers()).equal("No vacationers are added yet");
        });
        it('should throw an error', function () {
            expect(holidayPackage.generateHolidayPackage.bind(holidayPackage)).to.throw("There must be at least 1 vacationer added");
        });
        it('should throw an error', function () {
            expect(holidayPackage.addVacationer.bind(holidayPackage, " ")).to.throw("Vacationer name must be a non-empty string");
        });
        it('should throw an error', function () {
            expect(holidayPackage.addVacationer.bind(holidayPackage, 123)).to.throw("Vacationer name must be a non-empty string");
        });
        it('should throw an error', function () {
            expect(holidayPackage.addVacationer.bind(holidayPackage, "123")).to.throw("Name must consist of first name and last name");
        });
        it('should throw an error', function () {
            expect(function () {
                holidayPackage.insuranceIncluded = "true";
            }).to.throw("Insurance status must be a boolean");
        });
    });

    describe("Tests with Added Vacationers", function () {
        beforeEach(function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
        });

        it('should return valid vacationers list', function () {
            let result = "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev";
            expect(holidayPackage.showVacationers()).equal(result);
        });

        it('should generate valid holiday package with insurance', function () {
            holidayPackage.insuranceIncluded = true;
            let result = "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1500";
            expect(holidayPackage.generateHolidayPackage()).equal(result);
        });

        it('should generate valid holiday package without insurance', function () {
            let result = "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1400";
            expect(holidayPackage.generateHolidayPackage()).equal(result);
        });
    })
});
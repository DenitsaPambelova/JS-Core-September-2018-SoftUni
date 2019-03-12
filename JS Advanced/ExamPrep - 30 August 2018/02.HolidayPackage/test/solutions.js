let expect = require('chai').expect;
const HolidayPackage = require('./HolidayPackage');

describe('HolidayPackage', function () {
    let holidayPackage;
    beforeEach(function () {
        holidayPackage = new HolidayPackage('Italy', 'Summer'); //make new class to test
    });
    it('insuranceIncluded must have default value - false', function () {
        expect(holidayPackage.insuranceIncluded).to.equal(false);
    });
    it('Show message if no vacationers add yet', function () {
        expect(holidayPackage.showVacationers()).to.equal('No vacationers are added yet')
    });
    it('generateHolidayPackage must throw an error', function () {
        expect(() => holidayPackage.generateHolidayPackage()).to.throw();
    });
    it('addVacationer must throw error for adding non-string', function () {
        expect(() => holidayPackage.addVacationer(1)).to.throw();
    });
    it('addVacationer must throw error for adding empty string', function () {
        expect(() => holidayPackage.addVacationer(' ')).to.throw();
    });
    it('addVacationer must throw error for adding only one name', function () {
        expect(() => holidayPackage.addVacationer('Pesho')).to.throw();
    });
    it('show vacationers must show correct message', function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshev');
        expect(holidayPackage.showVacationers()).to.equal('Vacationers:\nIvan Ivanov\nPesho Peshev')
    });
    it('generateHolidayPackage must show correct sum for Summer season', function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Pesho Peshev');
        expect(holidayPackage.generateHolidayPackage())
            .to.equal('Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshev\nPrice: 1000')
    });
});
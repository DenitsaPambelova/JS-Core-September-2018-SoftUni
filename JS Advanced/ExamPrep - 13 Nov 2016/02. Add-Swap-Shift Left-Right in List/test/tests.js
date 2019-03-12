let expect = require('chai').expect;

let createList = require('./createList').createList;

describe('test', function () {
    let list;
    beforeEach(() => {
        list = createList();
    });
    describe("has data array", () => {
        it('has empty array', function () {
            expect(list.toString()).to.equal('');
        });
    });
    describe('add', () => {
        it('correct add', function () {
            list.add(5);
            list.add(6);
            list.add({});
            list.add('2');
            list.add(-1);
            list.add([]);
            expect(list.toString()).to.equal('5, 6, [object Object], 2, -1, ');
        });
    });
    describe('shiftLeft correct', () => {
        it('works', function () {
            list.add(2);
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.equal('3, 2');
        });
        it('one element', function () {
           list.add(1);
           list.shiftLeft();
           expect(list.toString()).to.equal('1');
        });
    });
    describe('shiftRight correct', () => {
        it('works', function () {
            list.add(2);
            list.add(3);
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.equal('5, 2, 3');
        });
        it('one element', function () {
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.equal('1');
        });
    });
    describe('swap works', () => {
        it('works', function () {
            list.add(2);
            list.add(3);
            list.add(5);

            expect(list.swap(-1, 1)).to.equal(false);
            expect(list.swap('pesho', 2)).to.equal(false);
            expect(list.swap(2.5, 2)).to.equal(false);
            expect(list.swap(3, 2)).to.equal(false);

            expect(list.swap(1, -1)).to.equal(false);
            expect(list.swap(2, 'pesho')).to.equal(false);
            expect(list.swap(2, 2.5)).to.equal(false);
            expect(list.swap(2, 3)).to.equal(false);

            expect(list.swap({}, 1)).to.equal(false);
            expect(list.swap(1, {})).to.equal(false);

            expect(list.swap(1, 1)).to.equal(false);
            expect(list.swap(0, 1)).to.equal(true);


        });
        it('okay', function () {
            list.add(1);
            list.add(2);
            list.swap(0, 1);
            expect(list.toString()).to.equal("2, 1");
        });
        it('swaps', function () {
            list.add(2);
            list.add(1);
            list.swap(-1, 20);
            expect(list.toString()).to.equal('2, 1');
        });
    });
    describe('toString', () => {
        it("work to string", function () {
            list.add('hi');
            list.add('by');
            expect(list.toString()).to.equal('hi, by');
        });
        it('return empty', function () {
            expect(list.toString()).to.equal('');
        });
    });
});
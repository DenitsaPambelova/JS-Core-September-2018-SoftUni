let expect = require('chai').expect;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}



describe('Calculator tests', function () {
    describe('constructor tests on initialization', function () {
        it('test', function () {
            let calc = new Calculator();
            expect(calc.expenses).to.eql([]);
            expect(calc.expenses.length).to.equal(0); })
    });

    describe('add tests', function () {
        it('test', function () {
            let calc = new Calculator();
            calc.add(10);
            calc.add('Pesho');
            calc.add('5');
            calc.add([]);
            calc.add({a: 'hi'});
            calc.add(true);
            expect(calc.expenses).to.eql([10, 'Pesho', '5', [], {a: 'hi'}, true])
            expect(calc.expenses.length).to.equal(6);
            expect(calc.expenses[0]).to.equal(10);
            expect(calc.expenses[1]).to.equal('Pesho');
            expect(calc.expenses[2]).to.equal('5');
            expect(calc.expenses[3]).to.eql([]);
            expect(calc.expenses[4]).to.eql({a: 'hi'});
            expect(calc.expenses[5]).to.equal(true);
        });
    });

        describe('divideNums tests', function () {

            it('test', function () {
                let calc = new Calculator();
                calc.add("Pesho");
                calc.add(10);
                calc.add(5);
                calc.add({});
                expect(calc.divideNums()).to.equal(2)  });

            it('test', function () {
                let calc = new Calculator();
                calc.add(0);
                calc.add('Pesho');
                calc.add(5);
                calc.add('5');
                calc.add([]);
                calc.add(false);
                calc.add(1);
                expect(calc.divideNums()).to.equal(0)
            });

            it('test', function () {
                let calc = new Calculator();
                calc.add("Pesho");
                calc.add(10);
                calc.add(5);
                calc.add('5');
                calc.add([]);
                calc.add(false);
                calc.add(0);
                expect(calc.divideNums()).to.equal('Cannot divide by zero')
            });

            it('test', function () {
                let f = function () {
                    let calc = new Calculator();
                    calc.divideNums()
                };
                expect(f).to.throw(Error, 'There are no numbers in the array!')
            });
        });

        describe('toString tests', function () {
            it('test', function () {
                let calc = new Calculator();
                calc.add(10);
                calc.add('Pesho');
                calc.add('5');
                expect(calc.toString()).to.equal('10 -> Pesho -> 5')
            });


            it('test', function () {
                let calc = new Calculator();
                calc.add(10);
                expect(calc.toString()).to.equal('10');
            });

            it('test', function () {
                let calc = new Calculator();
                expect(calc.toString()).to.equal('empty array');
            });

            it('test', function () {
                let calc = new Calculator();
                calc.add("Pesho");
                calc.add(10);
                calc.add(5);
                calc.add('5');
                calc.add([]);
                calc.add(false);
                calc.add(1);
                calc.divideNums();
                expect(calc.toString()).to.equal('2')
            })
        });

        describe('orderBy tests', function () {
            it('test', function () {
                let calc = new Calculator();
                expect(calc.orderBy()).to.equal('empty');
            });

            it('test', function () {
                let calc = new Calculator();
                calc.add(5);
                calc.add(1);
                calc.add(101);
                calc.add(100);
                expect(calc.orderBy()).to.equal('1, 5, 100, 101');
            });

            it('test', function () {
                let calc = new Calculator();
                calc.add(8);
                expect(calc.orderBy()).to.equal('8');
            });


        })
    })
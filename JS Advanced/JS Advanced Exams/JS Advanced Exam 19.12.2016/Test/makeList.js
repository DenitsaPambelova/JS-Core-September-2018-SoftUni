let expect=require('chai').expect;

function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

// let list = makeList();
// console.log(`list = [${list}]`);
// list.addRight(1);
// list.addRight("two");
// list.addLeft(0);
// console.log(`list = [${list}]`);
// list.clear();
// list.addLeft("beer");
// list.addLeft(3.14);
// console.log(`list = [${list}]`);

describe("Test List", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    it("should create empty list with methods addLeft, addRight, clear and toString", function () {
        expect(typeof myList.addLeft).to.equal('function');
        expect(typeof myList.addRight).to.equal('function');
        expect(typeof myList.clear).to.equal('function');
        expect(typeof myList.toString).to.equal('function');
        expect(myList.toString()).to.equal('');
    });
    it("should successfully add left items of any type", function () {
        myList.addLeft(5);
        myList.addLeft(2.12);
        myList.addLeft("pesho");
        myList.addLeft({name: "pesho", age: 13});
        expect(myList.toString()).to.equal("[object Object], pesho, 2.12, 5");
    });
    it("should successfully add right items of any type", function () {
        myList.addRight(5);
        myList.addRight(2.12);
        myList.addRight("pesho");
        myList.addRight({name: "pesho", age: 13});
        expect(myList.toString()).to.equal("5, 2.12, pesho, [object Object]");
    });
    it("should successfully add left and right and clear the list", function () {
        myList.addLeft(5);
        myList.addRight(3.22);
        myList.clear();
        expect(myList.toString()).to.equal("");
    });

});

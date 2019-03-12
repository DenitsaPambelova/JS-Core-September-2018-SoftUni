// let expect=require('chai').expect;
//
// class SortedList {
//     constructor() {
//         this.list = [];
//     }
//
//     add(element) {
//         this.list.push(element);
//         this.sort();
//     }
//
//     remove(index) {
//         this.vrfyRange(index);
//         this.list.splice(index, 1);
//     }
//
//     get(index) {
//         this.vrfyRange(index);
//         return this.list[index];
//     }
//
//     vrfyRange(index) {
//         if (this.list.length == 0) throw new Error("Collection is empty.");
//         if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
//     }
//
//     sort() {
//         this.list.sort((a, b) => a - b);
//     }
//
//     get size() {
//         return this.list.length;
//     }
// }


describe("SortedList", function() {
    let myList;

    beforeEach(function() {
        myList = new SortedList();
    });

    it("should have all of the functions in it's prototype", function() {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found.");
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found.");
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found.");
    });

    it("should have size property getter", function() {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, "Property size was not found.");
        expect(typeof myList.size).to.not.equal('function', "Property size should not be a function.");
    });

    it("should have working add and get functions", function() {
        myList.add(3);
        expect(myList.get(0)).to.equal(3, "Element wasn't added.");
    });

    it("should have working add and remove functions", function() {
        myList.add(6);
        myList.add(9);
        myList.remove(0);
    });

    it("should be sorted after adding", function() {
        myList.add(5);
        expect(myList.get(0)).to.equal(5, "Element wasn't added.");
        myList.add(2);
        expect(myList.get(0)).to.equal(2, "Collection wasn't sorted.");
        expect(myList.get(1)).to.equal(5, "Collection wasn't sorted.");
    });

    it("should be sorted after removing", function() {
        myList.add(4);
        myList.add(1);
        myList.add(10);
        myList.remove(1);
        expect(myList.get(0)).to.equal(1, "Collection wasn't sorted.");
        expect(myList.get(1)).to.equal(10, "Collection wasn't sorted.");
    });

    it("should not remove with negative index", function() {
        myList.add(6);
        myList.add(9);
        expect(() => myList.remove(-1)).to.throw(Error);
    });

    it("should not get with negative index", function() {
        myList.add(6);
        myList.add(9);
        expect(() => myList.get(-1)).to.throw(Error);
    });

    it("should not remove with outside index", function() {
        myList.add(6);
        myList.add(9);
        expect(() => myList.remove(2)).to.throw(Error);
    });

    it("should not get with outside index", function() {
        myList.add(6);
        myList.add(9);
        expect(() => myList.get(2)).to.throw(Error);
    });

    it("should not remove with empty collection", function() {
        expect(() => myList.remove(0)).to.throw(Error);
    });

    it("should not get with empty collection", function() {
        expect(() => myList.get(0)).to.throw(Error);
    });

    it("should have working size property", function() {
        expect(myList.size).to.equal(0, "Empty collection had wrong size.");
        myList.add(1);
        myList.add(2);
        expect(myList.size).to.equal(2, "Collection size was wrong.");
        myList.add(3);
        expect(myList.size).to.equal(3, "Collection size was wrong.");
        myList.remove(1);
        myList.remove(1);
        expect(myList.size).to.equal(1, "Collection size was wrong.");
    });
});
let expect=require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('tests',function(){
    let list;
    beforeEach(()=>{
        list=createList();
        });
    describe("has data array",function () {
       it ("has empty array",function () {
          expect(list.toString()).to.equal("")
       });
    });
    describe('add',function () {

        it ("correct add",function () {
            list.add("5");
            list.add("6");
            list.add(2);
            list.add({});
            list.add(-1);
            list.add([])
            expect(list.toString()).to.equal('5, 6, 2, [object Object], -1, ');
        });
    });
    describe("shiftLEft correctly",function () {
        it("works",function () {
           list.add(2);
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.equal("3, 2");
        });
        it ("try shiftLeft with one element in the array",function () {
           list.add(1) ;
           list.shiftLeft();
           expect(list.toString()).to.equal("1");
        });
    });
    describe("shiftRight correctly",function () {
        it("works",function () {
            list.add(2);
            list.add(3);
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.equal("5, 2, 3");
        });
        it ("try shiftLeft with one element in the array",function () {
            list.add(1) ;
            list.shiftLeft();
            expect(list.toString()).to.equal("1");
        });
    });
    describe("swap works correctly",function () {
        it("works",function () {
            list.add(2);
            list.add(3);
            list.add(5);
            //for first index
            expect(list.swap(-1,1)).to.equal(false);
            expect(list.swap('pesho',2)).to.equal(false);
            expect(list.swap(2.5,2)).to.equal(false);
            expect(list.swap(3,2)).to.equal(false);
            expect(list.swap({},1)).to.equal(false);
            //second index
            expect(list.swap(1,-1)).to.equal(false);
            expect(list.swap(2,'pesho')).to.equal(false);
            expect(list.swap(2,2.5)).to.equal(false);
            expect(list.swap(2,3)).to.equal(false);
            expect(list.swap({},1)).to.equal(false);
            //if equal
            expect(list.swap(2,2)).to.equal(false);
            expect(list.swap(0,0)).to.equal(false);
            expect(list.swap(0,1)).to.equal(true);
            //more


        });
        it ("pesho",function () {
          list.add(1);
            list.add(2);
            list.swap(0,1);
            expect(list.toString()).to.equal("2, 1");
        });
        it ("swaps",function () {
          list.add(2)  ;
          list.add(1);
          list.swap(-1,10);
          expect(list.toString()).to.equal("2, 1")
        })
    });
    describe("toString works",function () {
      it ("works",function () {
          list.add("hi");
          list.add("bye");
          expect(list.toString()).to.equal("hi, bye");
      });
      it ("returns empty",function () {
          expect(list.toString()).to.equal("");
      });
    });

});
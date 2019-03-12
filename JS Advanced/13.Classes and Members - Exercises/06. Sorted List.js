class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(num) {
        this.collection.push(num);
        this.sort();
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index]
        }
    }

    sort() {
        this.collection = this.collection.sort((a, b) => a - b);
    }
}

let arr = new List();
arr.add(100);
arr.add(22);
console.log(arr.get(0));
//arr.remove(1);
//console.log(arr.size);
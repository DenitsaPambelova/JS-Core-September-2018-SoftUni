class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;  //string
        this.shelfGenre = shelfGenre;  //string
        this.shelfCapacity = shelfCapacity;  // number
        this.shelf = [];
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (value === 'livingRoom' || value === 'bedRoom' || value === 'closet') {
            this._room = value;
        } else {
            throw new Error(`Cannot have book shelf in ${value}`)
        }
    }

    addBook(bookName, bookAuthor, genre) {
        let book={};
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
            if (genre === undefined) {
                book = {bookName, bookAuthor}
            } else {
                book = {bookName, bookAuthor, genre}
            }
            this.shelf.push(book)

        } else {
            if (genre === undefined) {
                book = {bookName, bookAuthor}
            } else {
                book = {bookName, bookAuthor, genre}
            }
            this.shelf.push(book)
        }

        this.shelf.sort((b1, b2) => b1.bookAuthor.localeCompare(b2.bookAuthor))
    }

    throwAwayBook(bookName) {
        for (let book of this.shelf) {
            if (book.bookName === bookName) {
                let index = this.shelf.indexOf(book);
                this.shelf.splice(index, 1);
            }
        }
    }

    showBooks(genre) {
        let result = [];
        for (let book of this.shelf) {
            if (book.hasOwnProperty('genre')) {
                if (book.genre === genre) {
                    result.push(book)
                }
            }
        }
        return `Results for search "${genre}":\n` +
            result.map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`).join('\n')
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }
        return `"${this.shelfGenre}" shelf in ${this._room} contains:\n` +
            this.shelf.map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`).join('\n')
    }
}


let livingRoom = new BookCollection("Programming", "livingRoom", 5);
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov");
livingRoom.addBook("Introduction to Programming with Java", "Zvetlin Nakov");
livingRoom.addBook("Programming for .NET Framework", "Boris Nakov");
console.log(livingRoom.shelf);


console.log()

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));


console.log()

let garden = new BookCollection("Programming", "garden");

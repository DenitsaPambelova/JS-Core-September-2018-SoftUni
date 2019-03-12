class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        if (this.room !== 'livingRoom' && this.room !== 'bedRoom' && this.room !== 'closet') {
            throw new Error(`Cannot have book shelf in ${this.room}`);
        }
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = Number(shelfCapacity);
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            genre: genre
        };

        if (this.shelf.length < this.shelfCapacity) {
            this.shelf.push(book);
        } else {
            this.shelf.shift();
            this.shelf.push(book);
        }

        this.shelf.sort((a, b) => a['bookAuthor'].localeCompare(b['bookAuthor']));
        return this;
    }

    throwAwayBook(bookName) {
        let index = undefined;

        for (const book of this.shelf) {
            if (book['name'] === bookName) {
                index = this.shelf.indexOf(book);
            }
        }

        this.shelf.splice(index, 1);

    }

    toString() {
        if (this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        } else {
            let info = `"${this.shelfGenre}" shelf in ${this.room} contains:`;

            for (const book of this.shelf) {
                info += `\n\uD83D\uDCD6 "${book['bookName']}" - ${book['bookAuthor']}`;
            }

            return info;
        }
    }

    showBooks(genre) {
        let thisGenre = [];

        for (const book of this.shelf) {
            if (book['genre'] === genre) {
                thisGenre.push(book);
            }
        }

        let info = `Results for search "${genre}":`;

        for (const book of thisGenre) {
            info += `\n\uD83D\uDCD6 ${book['bookAuthor']} - "${book['bookName']}"`;
        }

        return info;
    }

    get shelfCondition() {
        let totalSpace = this.shelfCapacity;
        let used = this.shelf.length;
        return totalSpace - used;
    }
}
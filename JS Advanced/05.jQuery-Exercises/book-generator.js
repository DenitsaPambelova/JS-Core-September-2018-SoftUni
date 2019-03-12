function createBook(selector, title, author, isbn) {
    let book = $('<div>')
        .attr("id", "book1");

    let titleElement = $('<p>')
        .addClass("title")
        .text(title);

    let authorElement = $('<p>')
        .addClass("author")
        .text(author);

    let isbnElement = $('<p>')
        .addClass("isbn")
        .text(isbn);

    let select = $('<button>')
        .text('Select')
        .on("click", function() {
            book.css("border", "2px solid blue");
        });

    let deselect = $('<button>')
        .text('Deselect')
        .on("click", function() {
            book.css("border", "none");
        });

    book.append(titleElement, authorElement, isbnElement, select, deselect);

    $(selector).append(book);
}
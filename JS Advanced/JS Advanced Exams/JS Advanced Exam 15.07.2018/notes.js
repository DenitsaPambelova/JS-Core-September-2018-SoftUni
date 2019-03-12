function addSticker() {
    let title = $('.title').val();
    let text = $('.content').val();

    if (title && text) {
        let newNote = $('<li class="note-content">')
            .append($('<a class="button">x</a>').on('click', deleteNote))
            .append($(`<h2>${title}</h2>`))
            .append($('<hr>'))
            .append($(`<p>${text}</p>`));

        function deleteNote() {
            newNote.remove();
        }
        $('#sticker-list').append(newNote);

        $('.title').val('');
        $('.content').val('');
    }
}



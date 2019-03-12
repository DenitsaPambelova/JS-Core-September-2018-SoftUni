function domSearch(selector, caseSensitive) {
    $("<div>")
        .addClass("add-controls")
        .append($("<label>")
            .text("Enter text: ")
            .append($("<input>")))
        .append($("<a>")
            .text("Add")
            .addClass("button")
            .css("display", "inline-block")
            .click(addNewItem))
        .appendTo(selector);

    $("<div>")
        .addClass("search-controls")
        .append($("<label>")
            .text("Search: ")
            .append($("<input>")
                .change(filterItems)))
        .appendTo(selector);

    $("<div>")
        .addClass("result-controls")
        .append($("<ul>")
            .addClass("items-list"))
        .appendTo(selector);


    function filterItems() {
        let searchedText = $(".search-controls input").val();
        let text;
        $(".result-controls ul li").each((i, e) => {
            if (caseSensitive) {
                text = e.textContent;
            } else {
                searchedText = searchedText.toUpperCase();
                text = e.textContent.toUpperCase();
            }

            if (text.indexOf(searchedText) === -1) {
                $(e).css("display", "none");
            } else {
                $(e).css("display", "block");
            }
        });
    }

    function addNewItem() {
        let item = $(".add-controls input");

        $(`<li>`)
            .addClass('list-item')
            .append($("<a>")
                .addClass("button")
                .text("X")
                .css("display", "inline-block")
                .click(deleteItem))
            .append($(`<strong>${item.val()}</strong>`))
            .appendTo($(".result-controls ul"));

        item.val("");
    }

    function deleteItem() {
        $(this).parent().remove();
    }
}
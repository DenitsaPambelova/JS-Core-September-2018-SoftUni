class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(id) {
        $(`#${id}`).append($("<table>").append($("<caption>").text(`${this.title} Payment Manager`))
            .append($("<thead>")
                .append($("<tr>")
                    .append($("<th class='name'>Name</th>"))
                    .append($("<th class='category'>Category</th>"))
                    .append($("<th class='price'>Price</th>"))
                    .append($("<th>Actions</th>"))))
            .append($("<tbody class='payments'></tbody>"))
            .append($("<tfoot class='input-data'>")
                .append($("<tr>")
                    .append($("<td><input name='name' type='text'></td>"))
                    .append($("<td><input name='category' type='text'></td>"))
                    .append($("<td><input name='price' type='number'></td>"))
                    .append($("<td><button>Add</button></td>").on("click", addRow)))));

        function addRow() {
            let name = $(`#${id} tfoot [name='name']`);
            let category = $(`#${id} tfoot [name='category']`);
            let price = $(`#${id} tfoot [name='price']`);

            if (name.val() !== "" && category.val() !== "" && price.val() !== "") {
                $(`#${id} table .payments`).append($("<tr>")
                    .append($("<td>").text(name.val()))
                    .append($("<td>").text(category.val()))
                    .append($("<td>").text(Number(price.val())))
                    .append($("<td><button>Delete</button></td>")
                        .on("click", deleteRow)))
            }
            name.val("");
            category.val("");
            price.val("");
        }

        function deleteRow() {
            $(this).parent().remove();
        }
    }
}
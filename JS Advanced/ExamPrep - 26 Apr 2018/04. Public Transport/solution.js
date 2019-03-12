class PublicTransportTable {
    constructor(town) {
        this.town = town;
        this.addEventListener();
    }

    set town(val) {
        $("table caption").text(`${val}'s Public Transport`)
    }

    addEventListener() {
        $(".search-btn").on("click", function () {
            let inputType = $("input[name='type']");
            let inputNumber = $("input[name='name']");
            let type = inputType.val();
            let name = inputNumber.val();

            if (name || type) {
                let rows = $(".vehicles-info > tr").not('.more-info');

                for (let i = 0; i < rows.length; i++) {
                    let firstTd = $(rows[i]).children()[0].textContent;
                    let secondTd = $(rows[i]).children()[1].textContent;
                    if (!firstTd.includes(type) || !secondTd.includes(name)) {
                        $(rows[i]).css('display', 'none');
                        let button = $(rows[i]).find('td').eq(2).find('button');
                        if (button.text() === 'Less Info') {
                            button.click()
                        }
                    } else {
                        $(rows[i]).css('display', '')
                    }
                }
            }
        });
        $(".clear-btn").on("click", function clearInput() {
            $("input[name='type']").val("");
            $("input[name='name']").val("");

            $(".hide-info").each((i, e) => $(e).attr("style", ""))
        });
    }

    addVehicle(obj) {
        let [type, name, route, price, driver] = [obj.type, obj.name, obj.route, obj.price, obj.driver];


        $(".vehicles-info")
            .append($("<tr class='hide-info'>")
                .append($("<td>")
                    .text(`${type}`))
                .append($("<td>")
                    .text(`${name}`))
                .append($("<td>")
                    .append($("<button>More Info</button>")
                        .on("click", toggleData))));

        let moreInfo = $("<tr>")
            .addClass("more-info")
            .append($("<td colspan='3'>")
                .append($("<table>")
                    .append($("<tbody>").append($("<tr>")
                        .append($("<td>")
                            .text(`Route: ${route}`)))
                        .append($("<tr>")
                            .append($("<td>")
                                .text(`Price: ${price}`)))
                        .append($("<tr>")
                            .append($("<td>")
                                .text(`Driver: ${driver}`))))));

        function toggleData() {
            let row = $(this).parent().parent();
            if ($(this).text() === "More Info") {
                $(this).text("Less Info");
                row.after(moreInfo);
            } else {
                $(this).text("More Info");
                moreInfo.detach();
            }
        }
    }
}
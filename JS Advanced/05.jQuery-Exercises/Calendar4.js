function calendar([day, month, year]) {
    let date = new Date(`${month},${day},${year}`);
    let locale = "en-us";
    let captionMonth = date.toLocaleString(locale, {month: "long"});

    $("<table>")
        .append($("<caption>")
            .text(`${captionMonth} ${date.getFullYear()}`))
        .append($("<tbody>")
            .append($("<tr>")))
        .appendTo($("#content"));

    let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i < weekDays.length; i++) {
        $("tbody tr").append($("<th>")
            .text(weekDays[i]));
    }
    weekDays.unshift(weekDays.pop());

    date = new Date(`${month},${1},${year}`);
    while (date.getMonth() === month - 1) {
        $("table tbody").append($("<tr>"));

        fillUpTable($("tr:last"));
    }

    function fillUpTable(selector) {
        for (let i = 0; i < weekDays.length; i++) {
            let currentDay = weekDays[date.getDay()];
            let tableHeaderDay = $(`th:eq(${i})`).text();

            if ((currentDay !== tableHeaderDay) || date.getMonth() !== month - 1) {
                selector.append($("<td>")
                    .text(""));
            } else {
                selector.append($("<td>")
                    .text(date.getDate()));
                if (date.getDate() === day) {
                    $("td:last").addClass("today");
                }
                date.setDate(date.getDate() + 1);
            }
        }
    }
}
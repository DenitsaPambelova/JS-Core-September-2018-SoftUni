(() => {
    const authorization = {"Authorization": "Basic " + btoa("guest" + ":" + "guest")};
    const baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/Students/?query={}&sort=ID";
    const tableBody = $("#results tbody");
    loadStudents();

    function loadStudents() {
        sendRequest().then(displayStudents).catch(handleError)
    }

    function sendRequest() {
        return $.ajax({
            url: baseUrl,
            headers: authorization,
        });
    }

    function displayStudents(data) {
        for (let student of data) {
            $("<tr>")
                .append($("<td>").text(`${student.ID}`))
                .append($("<td>").text(`${student.FirstName}`))
                .append($("<td>").text(`${student.LastName}`))
                .append($("<td>").text(`${student.FacultyNumber}`))
                .append($("<td>").text(`${student.Grade}`))
                .appendTo(tableBody);
        }
    }

    function handleError(err) {
        $("body").text(`${err.status} (${err.textContent})`);
    }
})();
function attachEvents() {
    let url = `https://jsapps-firstdemoproject.firebaseio.com/messangers`;
    let textAreaa = $('#messages');
    let author = $("#author");
    let content = $('#content');

    loadMessages();

    $("#submit").on("click", postNewMessages);
    $("#refresh").on("click", loadMessages);

    function postNewMessages() {
        if (author.val().length === 0 || content.val().length === 0) {
            return;
        }
        let msg = {
            author: author.val(),
            content: content.val(),
            timeStamp: Date.now()
        };
        let req = {
            method: "POST",
            url: url + ".json",
            data: JSON.stringify(msg),
            success: function () {
                author.val("");
                content.val("");
            },
            error: handleError
        };
        $.ajax(req);
    }

    function loadMessages() {
        let req = {
            method: "GET",
            url: url + ".json",
            success: displayMsg,
            error: handleError
        };
        $.ajax(req);
    }

    function displayMsg(data) {
        let text = "";
        let sortedId = Object.keys(data).sort((a, b) => sortByData(a, b, data));
        for (let id of sortedId) {
            text += data[id].author + ": " + data[id].content + "\n";
        }
        textAreaa.text(text);
    }

    function handleError() {
        console.log(err);
    }

    function sortByData(obj1, obj2, data) {
        let time1 = data[obj1].timeStamp;
        let time2 = data[obj2].timeStamp;
        return time1 - time2;
    }
}
function attachEvents() {
    const baseUrl = "https://baas.kinvey.com/appdata/kid_rkJQfNZkV/";
    const username = "peter";
    const password = "p";
    const titles = $("#posts");
    const postTitle = $("#post-title");
    const postComments = $("#post-comments");

    $("#btnLoadPosts").on("click", findAllPosts);
    $("#btnViewPost").on("click", findSelectedPost);

    function findAllPosts() {
        sendRequest("posts")
            .then(loadPosts)
            .catch(handleError);
    }

    function findSelectedPost() {
        let selected = titles.find(":selected");
        sendRequest(`posts/${selected.val()}`)
            .then(getSelectedPost)
            .then(loadComments)
            .catch(handleError)
    }

    function getSelectedPost(data) {
        postTitle.empty();
        postTitle.text(`${data.title}`);
        $("#post-body").text(`${data.body}`);

        return sendRequest(`comments/?query={"postId":"${data._id}"}`);
    }

    function loadComments(data) {
        postComments.empty();
        for (let comment of data) {
            postComments.append($(`<li>${comment.text}</li>`));
        }
    }

    function loadPosts(data) {
        titles.empty();
        for (let post of data) {
            titles.append($("<option>").text(`${post.title}`).val(`${post._id}`));
        }
    }

    function handleError(err) {
        console.log(err)
    }

    function sendRequest(extension) {
        return $.ajax({
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            url: baseUrl + extension
        });
    }
}
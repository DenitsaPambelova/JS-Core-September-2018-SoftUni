const memeController = (function () {

    function getAllMemes(context) {
        return memeModel.getAllMemes()
            .then(function (response) {
                context.hasMemes = response.length > 0;
                context.memes = response;

                response.forEach(m => {
                    m.isAuthor = m._acl.creator === context.userId;
                });
            });
    }

    function getAllMemesByCreator(username, context) {
        return memeModel.getAllMemesByCreator(username)
            .then(function (response) {
                context.userProfiles[0].hasMemes = response.length > 0;
                context.userProfiles[0].memes = response;
                response.forEach(m => {
                    m.isAuthorize = m._acl.creator === context.userId;
                });
            })
    }

    function createMeme(context) {
        if (!validator.isCreateFormValid(context.params)) {
            return;
        }

        const data = {
            creator: sessionStorage.getItem('username'),
            description: context.params.description,
            imageUrl: context.params.imageUrl,
            title: context.params.title
        };

        memeModel.create(data)
            .then(function () {
                notify.showInfo(`Meme created.`);
                context.redirect('#/home/meme');
            }).catch(notify.handleError);
    }

    function edit(context) {
        if (!validator.isCreateFormValid(context.params)) {
            return;
        }

        const memeId = context.params._id.substring(1);
        const data = {
            creator: sessionStorage.getItem('username'),
            description: context.params.description,
            imageUrl: context.params.imageUrl,
            title: context.params.title
        };

        memeModel.edit(memeId, data)
            .then(function () {
                notify.showInfo(`Meme ${data.title} updated.`);
                context.redirect('#/home/meme');
            }).catch(notify.handleError);
    }

    function removeMemo(context) {
        const memeId = context.params._id.substring(1);
        memeModel.remove(memeId)
            .then(function () {
                notify.showInfo(`Meme deleted.`);
                context.redirect('#/home/meme');
            }).catch(notify.handleError);
    }

    return {
        getAllMemes,
        createMeme,
        edit,
        removeMemo,
        getAllMemesByCreator
    }
})();
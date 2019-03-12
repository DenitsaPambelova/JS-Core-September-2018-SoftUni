const viewController = (function () {

    function authorizeUser(ctx) {
        ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
        ctx.username = sessionStorage.getItem('username');
        ctx.userId = sessionStorage.getItem('userId');
    }

    function renderHomePage(ctx) {
        authorizeUser(ctx);

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial("./views/home/home.hbs");
        });
    }
    function renderLoginPage(ctx) {
        authorizeUser(ctx);

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial("./views/login/login.hbs");
        });
    }
    function renderRegisterPage(ctx) {
        authorizeUser(ctx);

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial("./views/register/register.hbs");
        });
    }
    function renderHomeMemePage(ctx) {
        authorizeUser(ctx);
        memeController.getAllMemes(ctx)
            .then(function () {
                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: "./views/common/footer.hbs"
                }).then(function () {
                    this.partial('./views/memeFeed/memeFeed.hbs')
                })
            }).catch(notify.handleError)
    }

    function renderCreatePage(context) {
        authorizeUser(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/create/create.hbs');
        })
    }

    function renderEditPage(context) {
        authorizeUser(context);
        context._id = context.params._id.substring(1);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            memeModel.getById(context._id)
                .then((res) => {
                    context.title = res.title;
                    context.description = res.description;
                    context.imageUrl = res.imageUrl;

                    this.partial('./views/edit/edit.hbs');
                }).catch(notify.handleError)
        })

    }



    function renderDetailsPage(context) {
        authorizeUser(context);
        context._id = context.params._id.substring(1);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            memeModel.getById(context._id)
                .then((res) => {
                    context.creator = res.creator;
                    context.isAuthor = res._acl.creator === context.userId;
                    context.title = res.title;
                    context.imageUrl = res.imageUrl;
                    context.description = res.description;

                    this.partial('./views/details/details.hbs')
                }).catch(notify.handleError)
        })
    }

    function renderProfilePage(context) {
        authorizeUser(context);

        const username = context.params.username.substring(1);

        userModel.getByUserName(username)
            .then(function (res) {
                res[0].userId = context.userId;
                res[0].hasAvatar = res[0].avatarUrl;
                res[0].isMyProfile = res[0]._id === context.userId;
                context.userProfiles = res;

                memeController.getAllMemesByCreator(res[0].username, context)
                    .then(function () {
                        context.loadPartials({
                            header: './views/common/header.hbs',
                            footer: './views/common/footer.hbs'
                        }).then(function () {
                            this.partial('./views/userProfile/profile.hbs')
                        })
                    }).catch(notify.handleError);
            })
    }
    return {
        renderHomePage,
        renderLoginPage,
        renderRegisterPage,
        renderHomeMemePage,
        renderCreatePage,
        renderEditPage,
        renderDetailsPage,
        renderProfilePage
    }
})();


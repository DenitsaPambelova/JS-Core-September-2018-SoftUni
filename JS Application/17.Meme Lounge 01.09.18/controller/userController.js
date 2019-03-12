let userController = (() => {
    function login(ctx) {
        const username = ctx.params.username;
        const password = ctx.params.password;

        userModel.login(username, password)
            .then(function (res) {
                userModel.saveSession(res);
                notify.showInfo('Login successful.');
                ctx.redirect('#/home/meme');
            }).catch((err) => {
            notify.handleError(err);
            $('input[name="username"]').val('');
            $('input[name="password"]').val("");
        });
    }

    function createRegistration(ctx) {
        if (!validator.isRegFormValid(ctx.params)) {
            $('input[name="password"]').val("");
            $('input[name="repeatPass"]').val("");
            return;
        }
        const userData = {
            username: ctx.params.username,
            password: ctx.params.password,
            email: ctx.params.email,
            avatarUrl: ctx.params.avatarUrl
        };
        userModel.register(userData)
            .then(function (res) {
                userModel.saveSession(res);
                notify.showInfo('User registration successful.');
                ctx.redirect("#/home");
            }).catch(notify.handleError);

    }

    function logout(ctx) {
        userModel.logout()
            .then(function () {
                sessionStorage.clear();
                notify.showInfo("Logout successful.");
                ctx.redirect('#/home');
            })
    }
    function removeUser(ctx) {
        const userId=ctx.params.userId.substring(1);
        userModel.removeUserById(userId)
            .then(function (res) {
                sessionStorage.clear();
                notify.showInfo('User delete successful.');
                ctx.redirect('#/home');
            })
    }

    return {
        login,
        createRegistration,
        logout,
        removeUser
    }
})();
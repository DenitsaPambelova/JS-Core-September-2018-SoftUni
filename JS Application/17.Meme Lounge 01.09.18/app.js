const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('/index.html', viewController.renderHomePage);
        this.get('#/home', viewController.renderHomePage);

        this.get("#/login", viewController.renderLoginPage);
        this.post('#/login', userController.login);
        this.get('#/logout', userController.logout);

        this.get('#/register', viewController.renderRegisterPage);
        this.post('#/register', userController.createRegistration);

        this.get("#/home/meme",viewController.renderHomeMemePage);
        this.get('#/create', viewController.renderCreatePage);
        this.post('#/create', memeController.createMeme);

        this.get('#/edit/:_id', viewController.renderEditPage);
        this.post('#/edit/:_id', memeController.edit);
        this.get('#/details/:_id', viewController.renderDetailsPage);
        this.get('#/delete/:_id', memeController.removeMemo);

        this.get('#/profile/:username', viewController.renderProfilePage);
        this.get('#/profile/:creator', viewController.renderProfilePage);
        this.get('#/profile/delete/:userId', userController.removeUser);
    });

    app.run();
});
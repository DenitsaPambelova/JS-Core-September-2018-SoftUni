$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('/index.html', displayHome);
        this.get('#/home', displayHome);

        this.get('#/about', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs');
            });
        });

        this.get("#/login", function (context) {
            context.loggedIn = sessionStorage.getItem('auththoken') !== null;
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: "./templates/common/footer.hbs",
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial("./templates/login/loginPage.hbs")
            })
        });

        this.get("#/register", function (context) {
            context.loggedIn = sessionStorage.getItem('auththoken') !== null;
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: "./templates/common/footer.hbs",
                registerForm: './templates/register/registerForm.hbs'
            }).then(function () {
                this.partial("./templates/register/registerPage.hbs")
            })
        });
        this.post("#/register", function (context) {
            let username = this.params.username;
            let password = this.params.password;
            let repeatPassword = this.params.repeatPassword;

            if (password !== repeatPassword) {
                auth.showError('The given passwords do not match!!!');
            } else {
                auth.register(username, password)
                    .then(function (response) {
                        auth.saveSession(response);
                        auth.showInfo("You was registered successfully!");
                        displayHome(context);

                    }).catch(auth.handleError)
            }
        });
        this.post("#/login", function (context) {
            let username = this.params.username;
            let password = this.params.password;

            auth.login(username, password)
                .then(function (response) {
                    auth.saveSession(response);
                    auth.showInfo("You just logged in!");
                    displayHome(context);
                }).catch(auth.handleError);
        });

        this.get('#/logout', function (context) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    auth.showInfo('Successfully logged out');
                    displayHome(context)
                })
        });

        this.get("#/catalog", showCatalog);

        this.get('#/create', function (context) {
            context.loggedIn = sessionStorage.getItem('auththoken') !== null;
            context.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: "./templates/common/footer.hbs",
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs ')
            })
        });

        this.get('#/catalog/:_id', showTeamDetails);
        this.get('#/catalog/myTeam/:_id', showMyTeamDetails);

        //team listeners
        this.get('#/join/:teamId', joinTeam);
        this.get('#/leave', leaveTeam);
        this.get('#/edit/:teamId', renderEdit);
        this.post('#/edit/:teamId', edit);
        this.get('#/delete/:teamId', deleteTeam);

        // /create team listeners
        this.get('#/create', renderCreate);
        this.post('#/create', createTeam);


        function displayHome(context) {

            context.loggedIn = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');
            context.teamId = sessionStorage.getItem('teamId') !== 'undefined'
                || sessionStorage.getItem('teamId') !== null;

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });

        }

        function showCatalog(context) {
            context.loggedIn = sessionStorage.getItem('auththoken') !== null;
            context.username = sessionStorage.getItem('username');
            context.teamId = sessionStorage.getItem('teamId') !== 'undefined'
                || sessionStorage.getItem('teamId') !== null;
            context.hasNoTeam = sessionStorage.getItem('teamId') !== null;
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: "./templates/common/footer.hbs",
                team: './templates/catalog/team.hbs'
            }).then(function () {
                teamsService.loadTeams()
                    .then((response) => {
                        context.teams = response;
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    }).catch(auth.handleError);
            })
        }

        function showTeamDetails(context) {
            context.loggedIn = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');
            context.teamId = context.params._id.substring(1);
            context.isOnTeam = sessionStorage.getItem('teamId') !== "undefined"
                && sessionStorage.getItem('teamId') === context.teamId;

            auth.getUsers()
                .then(resp => {
                    context.members = resp.filter((key) => key.teamId === context.teamId);

                    this.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamMember: './templates/catalog/teamMember.hbs',
                        teamControls: './templates/catalog/teamControls.hbs'
                    }).then(function () {
                        teamsService.loadTeamDetails(context.teamId)
                            .then(res => {
                                context.isAuthor = sessionStorage.getItem('userId') === res._acl.creator;
                                context.name = res.name;
                                context.comment = res.comment;

                                this.partial('./templates/catalog/details.hbs');
                            }).catch(auth.handleError);
                    });

                }).catch(auth.handleError);
        }

        function showMyTeamDetails(context) {
            const myTeamId = sessionStorage.getItem('teamId');
            context.redirect(`#/catalog/:${myTeamId}`);
        }

        function deleteTeam(context) {
            const teamId = context.params.teamId.substring(1);

            teamsService.deleteTeam(teamId)
                .then(function (res) {
                    auth.showInfo(`The team was successfully deleted!`);
                    leaveTeam(context);
                    context.redirect('#/catalog');
                }).catch(auth.handleError);
        }

        function edit(context) {
            const teamId = sessionStorage.getItem('teamId');
            const name = context.params.name;
            const description = context.params.comment;

            if (name.trim() === '') {
                auth.showError(`Team name cannot be empty`);
                return;
            }

            teamsService.edit(teamId, name, description)
                .then(function (res) {
                    auth.showInfo(`Successfully edited!`);
                    context.redirect(`#/catalog/:${teamId}`);

                }).catch(auth.handleError);
        }

        function renderEdit(context) {
            context.loggedIn = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                editForm: './templates/edit/editForm.hbs'
            }).then(function (res) {
                this.partial('./templates/edit/editPage.hbs');
            })
        }

        function joinTeam(context) {
            const teamId = context.params.teamId.substring(1);
            const hasTeam = sessionStorage.getItem('teamId') !== 'undefined';

            if (!hasTeam) {
                teamsService.joinTeam(teamId)
                    .then(res => {
                        sessionStorage.clear();
                        auth.saveSession(res);
                        auth.showInfo(`Successfully joined!`);
                        context.redirect(`#/catalog/:${teamId}`);
                    });
            } else {
                auth.showError(`Can't join in new team, unless you leaves of your own team!`);
                context.redirect(`#/catalog/:${teamId}`);
            }
        }

        /** Fn for Get listener on leave ( team ) */
        function leaveTeam(context) {
            teamsService.leaveTeam()
                .then(function (res) {
                    sessionStorage.clear();
                    auth.saveSession(res);
                    auth.showInfo(`Successfully leave the team!`);
                    context.redirect('#/catalog');
                }).catch(auth.handleError);
        }

        function createTeam(context) {
            const hasTeam = sessionStorage.getItem('teamId') !== 'undefined';
            const username = sessionStorage.getItem('username');

            if (!hasTeam) {
                const name = this.params.name;
                const comment = this.params.comment;

                if (name.trim() === '') {
                    auth.showError(`Team name cannot be empty`);
                    return;
                }

                teamsService.createTeam(name, comment)
                    .then(function (response) {
                        auth.showInfo(`Team ${name} was successfully created!`);
                        const teamId = response._id;

                        teamsService.joinTeam(teamId)
                            .then(function (res) {
                                auth.saveSession(res);
                                context.redirect('#/catalog');
                            });
                    }).catch(auth.handleError);
            } else {
                auth.showError(`Can't create a team, unless you leaves your's one!`);
            }
        }

        function renderCreate(context) {
            context.loggedIn = sessionStorage.getItem('authtoken') !== null;
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            })
        }

    });

    app.run();
});
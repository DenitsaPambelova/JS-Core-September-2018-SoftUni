let userModel = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo._username;
        sessionStorage.setItem('username', username);
    }

    function login(username, password) {
        let userData = {
            username,
            password
        };
        return remote.post('user', 'login', 'basic', userData);
    }

    function register(userData) {
        return remote.post('user', '', 'basic', userData);
    }

    function logout() {
        let logOutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };
        return remote.post('user', '_logout', 'kinvey', logOutData);
    }
    function getUsers() {
        remote.get('user','','kinvey');
    }
    function getByUserName(username) {
        const endpoit=`?query={"username":"${username}"}`;
        return remote.get('user',endpoit,'kinvey');
    }
    function removeUserById(userId) {
        return remote.remove('user',userId,'kinvey')
    }

    return {
        saveSession,
        login,
        register,
        logout,
        getUsers,
        getByUserName,
        removeUserById
    }
})();
const validator = (function () {

    function isCreateFormValid(data) {
        //TODO...

        return true;
    }

    function isRegFormValid(data) {
        if (!/\b[A-Za-z]{3,}\b/.test(data.username)) {
            handler.showError(`Username should contains only English letters, at least 3 characters long`);
            return false;
        } else if (!/\b[A-Za-z0-9]{6,}\b/.test(data.password)) {
            handler.showError(`Password should contains only English letters and digits, at least 6 characters long`);
            return false;
        } else if (data.password !== data.repeatPass) {
            handler.showError(`Passwords doesn't matched.`);
            return false;
        }

        return true;
    }

    return {
        isCreateFormValid,
        isRegFormValid
    }
})();
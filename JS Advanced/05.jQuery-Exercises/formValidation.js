function validate() {
    let username = $("#username");
    let email = $("#email");
    let password = $("#password");
    let confirmPass = $("#confirm-password");
    let submitBtn = $("#submit");
    let company = $("#company");
    let companyInfo = $("#companyInfo");
    let fieldsAreValid = true;

    company.on("change", function () {
        if (company.is(":checked")) {
            companyInfo.css("display", "block");
        } else {
            companyInfo.css("display", "none");
        }
    });

    submitBtn.on("click", function (event) {
        event.preventDefault();
        checkInputFields();
        showMessage();
        fieldsAreValid = true;
    });

    function checkInputFields() {
        isItValid(username, /^[0-9A-Za-z]{3,20}$/);
        isItValid(email, /^.*@.*?[\.]+.*$/);

        if ((password.val() === confirmPass.val())) {
            isItValid(password, /^(\w{5,15})$/);
            isItValid(confirmPass, /^(\w{5,15})$/);
        } else {
            password.css("border-color", "red");
            confirmPass.css("border-color", "red");
            fieldsAreValid = false;
        }
        if (company.is(":checked")) {
            companyValidNumber();
        }
    }

    function isItValid(element, pattern) {
        if (pattern.test(element.val())) {
            element.css("border", "none");
        } else {
            element.css("border-color", "red");
            fieldsAreValid = false;
        }
    }

    function companyValidNumber() {
        let number = +$('#companyNumber').val();
        if (number < 1000 || number > 9999) {
            $('#companyNumber').css("border-color", "red");
            fieldsAreValid = false;
        } else {
            $('#companyNumber').css("border", "none");
        }
    }

    function showMessage() {
        if (fieldsAreValid) {
            $("#valid").css("display", "block");
        } else{
            $("#valid").css("display", "none");
        }
    }
}
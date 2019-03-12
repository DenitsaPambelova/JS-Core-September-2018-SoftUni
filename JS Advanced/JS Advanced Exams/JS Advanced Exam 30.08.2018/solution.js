function solution(container) {
    let fullName = "";
    let email = "";
    let phone = "";
    let address = "";
    let postalCode = "";

    let submitButton = $("#submit").on("click", submit);
    let editButton = $("#edit").on("click", edit);
    let continueButton = $("#continue").on("click", proceed);
    let previewElement = $("#infoPreview");
    let containerElement = $(container);

    let fullNameElement = $("#fullName");
    let emailElement = $("#email");
    let phoneNumberElement = $("#phoneNumber");
    let addressElement = $("#address");
    let postalCodeElement = $("#postalCode");


    function submit() {
        if (!fullNameElement.val() || !emailElement.val()) {
            return;
        }

        fullName = fullNameElement.val();
        email = emailElement.val();
        phone = phoneNumberElement.val();
        address = addressElement.val();
        postalCode = postalCodeElement.val();

        let nameItem = $("<li>").text(`Name: ${fullName}`);
        let emailItem = $("<li>").text(`E-mail: ${email}`);
        let phoneItem = $("<li>").text(`Phone: ${phone}`);
        let addressItem = $("<li>").text(`Address: ${address}`);
        let postalCodeItem = $("<li>").text(`Postal Code: ${postalCode}`);

        previewElement                  // append to the div infopreview list items with text into them
            .append(nameItem)
            .append(emailItem)
            .append(phoneItem)
            .append(addressItem)
            .append(postalCodeItem);

        fullNameElement.val("");      //clear input fields
        emailElement.val("");
        phoneNumberElement.val("");
        addressElement.val("");
        postalCodeElement.val("");
        submitButton.attr("disabled", true);   // disable submit button
        editButton.attr("disabled", false);   //ENABLE EDIT button
        continueButton.attr("disabled", false); // enable continue button
    }

    function edit() {
        previewElement.empty();           //empty the div containing previous information
        fullNameElement.val(fullName);        // return  the values back into the input fields
        emailElement.val(email);
        phoneNumberElement.val(phone);
        addressElement.val(address);
        postalCodeElement.val(postalCode);
        submitButton.attr("disabled", false);   // ENABLE SUBMIT BUTTON
        editButton.attr("disabled", true);    // disable edit button
        continueButton.attr("disabled", true);   // disable continue button
    }

    function proceed() {
        submitButton.attr("disabled", true);   //disable all buttona
        editButton.attr("disabled", true);
        continueButton.attr("disabled", true);

        let h2 = $("<h2>").text("Payment details");
        let choseOption = $("<option selected disabled hidden>").text("Choose");  // drop down menu option active -Choose
        let creditCardOption = $("<option >").text("Credit Card").val("creditCard");  //enter option text
        let bankTransferOption = $("<option >").text("Bank Transfer").val("bankTransfer");  //enter second option
        let select = $("<select id='paymentOptions' class='custom-select'>").on("change", paymentChanged) //element to attach payment options
        let extraDetails = $("<div id='extraDetails'>");  // tex with extra details

        select
            .append(choseOption)
            .append(creditCardOption)
            .append(bankTransferOption);

        containerElement   // let containerElement = $(container);
            .append(h2)
            .append(select)
            .append(extraDetails);
    }

    function paymentChanged() {
        let paymentDetails = $("#extraDetails");
        let paymentMethod = $("#paymentOptions").find(':selected').val(); //find selected option value
        paymentDetails.empty(); //empty the div

        switch (paymentMethod) {
            case "bankTransfer":
                bankTransfer(paymentDetails);
                break;
            case "creditCard":
                creditCard(paymentDetails);
                break;
        }

        let checkoutButton = $("<button id='checkOut'>").text("Check Out").on("click", checkOut);
        paymentDetails.append(checkoutButton);
    }

    function bankTransfer(paymentDetails) {
        let p = $("<p>");
        p.append("You have 48 hours to transfer the amount to:")
            .append($("<br>"))
            .append("IBAN: GR96 0810 0010 0000 0123 4567 890");
        paymentDetails.append(p);
    }

    function creditCard(paymentDetails) {
        let cardNumberElement = $("<div class='inputLabel'>").text("Card Number").append($("<input>"));
        let expirationDateElement = $("<div class='inputLabel'>").text("Expiration Date").append($("<input>"));
        let securityNumbersElement = $("<div class='inputLabel'>").text("Security Numbers").append($("<input>"));

        paymentDetails
            .append(cardNumberElement)
            .append($("<br>"))
            .append(expirationDateElement)
            .append($("<br>"))
            .append(securityNumbersElement)
            .append($("<br>"));
    }

    function checkOut() {
        let wrapper = $("#wrapper");
        let h4 = $("<h4>").text("Thank you for your reservation!");
        wrapper.empty();
        wrapper.append(h4);
    }
}
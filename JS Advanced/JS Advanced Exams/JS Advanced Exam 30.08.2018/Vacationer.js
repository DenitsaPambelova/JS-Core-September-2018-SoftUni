class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };

        if (creditCard) {
            this.addCreditCardInfo(creditCard);
        }

        this.idNumber = this.generateIDNumber();
        this.wishList = [];
    }

    get fullName() {
       return this._fullName;
    }

    set fullName(value) {
        let [firstName, middleName, lastName] = value;

        if (value.length !== 3) {
            throw Error("Name must include first name, middle name and last name")
        }

        let pattern = /\b[A-Z][a-z]+\b/gm;

        value.forEach(element => {
                if (!element.match(pattern)) {
                    throw new Error("Invalid full name");
                }
            }
        );

        this._fullName = {
            firstName,
            middleName,
            lastName
        };
    }

    generateIDNumber() {
        let vowels = ['a', 'e', 'o', 'i', 'u'];
        let firstNumber = 231 * this.fullName.firstName.charCodeAt(0);
        let secondNumber = 139 * this.fullName.middleName.length;
        let thirdNumber = vowels.includes(this.fullName.lastName[this.fullName.lastName.length - 1]) ? 8 : 7;

        return (firstNumber + secondNumber).toString() + thirdNumber;
    }

    addCreditCardInfo(info) {
        let [cardNumber, expirationDate, securityNumber] = info;

        if (info.length !== 3) {
            throw Error("Missing credit card information");
        }

        if (typeof cardNumber !== "number" || typeof securityNumber !== "number") {
            throw Error("Invalid credit card details");
        }

        this.creditCard.cardNumber = cardNumber;
        this.creditCard.expirationDate = expirationDate;
        this.creditCard.securityNumber = securityNumber;
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw Error("Destination already exists in wishlist");
        }

        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
            "ID Number: " + this.idNumber + "\n" +
            "Wishlist:\n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
            "Credit Card:\n" +
            "Card Number: " + this.creditCard.cardNumber + "\n" +
            "Expiration Date: " + this.creditCard.expirationDate + "\n" +
            "Security Number: " + this.creditCard.securityNumber;
    }
}
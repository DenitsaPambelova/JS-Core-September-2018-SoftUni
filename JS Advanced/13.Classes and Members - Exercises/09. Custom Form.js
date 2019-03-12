let result = (() => {
    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this.onChange();
        }

        onChange() {
            this.elements.on('input', (event) => {
                this.value = $(event.target).val();
            });
        }

        get elements() {
            return this._elements;
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            for (let e of this.elements) {
                $(e).val(value)
            }
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor() {
            this._element = $("<div>").addClass("form");
            this.textboxes = arguments;
        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(args) {
            for (let val of args) {
                if (!val instanceof Textbox) {
                    throw new Error();
                }
            }
            this._textboxes = args;
            for (let textbox of this._textboxes) {
                for (let e of textbox._elements) {
                    this._element.append($(e));
                }
            }
        }

        submit() {
            let allValid = true;
            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    for (let e of textbox._elements) {
                        $(e).css('border', "2px solid green")
                    }
                } else {
                    for (let e of textbox._elements) {
                        $(e).css('border', "2px solid red");
                    }
                    allValid = false;
                }

            }
            return allValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {Textbox, Form}
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox(".cl", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "new username";
password.value = "new password";
let form = new Form(username, password);
form.submit();
form.attach("#root");


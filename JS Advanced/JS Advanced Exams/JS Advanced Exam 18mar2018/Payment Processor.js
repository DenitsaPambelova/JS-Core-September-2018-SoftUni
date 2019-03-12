class PaymentProcessor {
    constructor(...args) {
        this.options = args.length > 0 ? args[0] : {};
        this.payments = [];
    }

    get options() {
        return this._options;
    }

    set options(op) {
        if (this._options === undefined) {
            this._options = {};
        }
        if (this._options.types === undefined) {
            this._options.types = ["service", "product", "other"];
        }
        if (this._options.precision === undefined) {
            this._options.precision = 2;
        }
        if (op.hasOwnProperty("precision")) {
            if (op.precision !== undefined) {
                this._options.precision = op.precision
            }
        }
        if (op.hasOwnProperty("types")) {
            if (op.types !== undefined) {
                this._options.types = op.types
            }
        }
    }
    registerPayment(id, name, type, value) {
        if (typeof id !== "string" || id.length === 0 || typeof name !== "string" || name.length === 0 || typeof value !== 'number' || !this.options.types.includes(type)) {
            throw new Error("Invalid data");
        } else {
            if (this.payments.length > 1 && this.payments.filter(i => i.id === id).length > 0) {
                throw new Error("Id is taken");
            } else {
                this.payments.push({
                    id: id,
                    name: name,
                    type: type,
                    value: value.toFixed(this.options.precision)
                });
            }
        }
    }

    deletePayment(id) {
        if (this.payments.length === 0 || this.payments.filter(i => i.id === id).length === 0) {
            throw new Error("Id does not exist");
        } else {
            this.payments = this.payments.filter(p => p.id !== id);
        }
    }

    get(id) {
        if (this.payments.length === 0 || this.payments.filter(i => i.id === id).length === 0) {
            throw new Error("Id does not exist");
        } else {
            let payment = this.payments.filter(p => p.id === id)[0];

            let result = [
                `Details about payment ID: ${payment.id}`,
                `- Name: ${payment.name}`,
                `- Type: ${payment.type}`,
                `- Value: ${payment.value}`
            ].join("\n");

            return result;
        }
    }

    setOptions(o) {
        this.options = o;
    }

    toString() {
        let sum = Number(0).toFixed(this.options.precision);

        if (this.payments.length > 0) {
            let s = 0;
            this.payments.forEach(pay => {
                s += Number(pay.value);
            });

            sum = s.toFixed(this.options.precision);
        }

        let result = [
            `Summary:`,
            `- Payments: ${this.payments.length}`,
            `- Balance: ${sum}`
        ].join("\n");

        return result;
    }
}
// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());
// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');
generalPayments.deletePayment('E028');
console.log(generalPayments.toString());
// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
//servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());
// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

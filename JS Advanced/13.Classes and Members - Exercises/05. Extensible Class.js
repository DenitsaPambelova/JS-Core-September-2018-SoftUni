let Extensible = (function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let prop in template) {
                if (template.hasOwnProperty(prop)) {
                    if (typeof template[prop] === "function") {
                        Extensible.prototype[prop] = template[prop];
                    } else {
                        this[prop] = template[prop];
                    }
                }
            }
        }
    }
})();
let template = {
    name: "javaScript",
    age: 20,
    sex: "djendar",
    testFunc: function () {
        return "test";
    }
};
let varOne = new Extensible();
let varTwo = new Extensible();
varTwo.extend(template);
console.log(varOne);
console.log(varOne.testFunc());
console.log(varTwo);
console.log(varTwo.testFunc());
console.log(varTwo.name);
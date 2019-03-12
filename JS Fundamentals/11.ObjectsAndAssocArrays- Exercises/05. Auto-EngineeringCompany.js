function autoCompanu(input) {
    let catalogue = new Map();
    for (let i = 0; i < input.length; i++) {
        let [carBrand, carModel, size] = input[i].split(" | ");
        size = Number(size);
        if (!catalogue.has(carBrand)) {
            catalogue.set(carBrand, new Map());
        }
        if (!catalogue.get(carBrand).has(carModel)) {
            catalogue.get(carBrand).set(carModel, 0);
        }
        catalogue.get(carBrand).set(carModel, catalogue.get(carBrand).get(carModel) + size);
    }
    for (let [brand, modelAndNumbers] of catalogue) {
        console.log(brand);
        for (let [model, number] of modelAndNumbers) {
            console.log(`###${model} -> ${number}`);
        }
    }

}
autoCompanu(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
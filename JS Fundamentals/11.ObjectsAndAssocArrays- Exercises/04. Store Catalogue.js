function storeCatalogue(input) {
    let catalogue = new Map();

    for (let line of input) {
        let [product, price] = line.split(" : ");
        let startChar = product.substring(0, 1).toUpperCase();
        if (!product.startsWith(startChar)) {
            continue;
        }
        catalogue.set(product, Number(price));
    }
    catalogue = new Map([...catalogue.entries()].sort());

    let letter = "";
    for (let [name, price] of catalogue) {
        if (name[0] != letter) {
            console.log(`${name[0]}`);
        }
        console.log(`  ${name}: ${price}`);
        letter = name[0];
    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
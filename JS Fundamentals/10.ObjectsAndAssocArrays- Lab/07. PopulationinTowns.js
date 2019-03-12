function townsPopulation(arr) {
    let townsMaps = new Map;
    for (let i = 0; i < arr.length; i++) {
        let [town, population] = arr[i].split("<->");
        population = Number(population);
        if (townsMaps.has(town)) {
            townsMaps.set(town, townsMaps.get(town) + population);
        } else {
            townsMaps.set(town, population);
        }
    }
    for (let [town, population] of townsMaps) {
        console.log(`${town}: ${population}`);
    }
}
townsPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
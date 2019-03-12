function modifyCar(carParts) {
    let modifyCar = {};

    modifyCar.model = carParts.model;
    let engine;
    if (carParts.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    } else if (carParts.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        };
    } else if (carParts.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    modifyCar.engine = engine;
    modifyCar.carriage = {
        type: carParts.carriage,
        color: carParts.color
    };
    if (carParts.wheelsize % 2 === 0) {
        carParts.wheelsize--;
    }
    let wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(carParts.wheelsize);
    }
    modifyCar.wheels = wheels;
    return modifyCar;
}

modifyCar({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);
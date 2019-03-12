function makeKompot(input) {
    let peachKG = 0;
    let plumKG = 0;
    let cherryKG = 0;
    let fruitsForRakia = 0;
    for (let line of input) {
        let [fruit, kilos] = line.split(/\s+/gm);
        switch (fruit) {
            case "cherry":
                cherryKG += +kilos;
                break;
            case "plum":
                plumKG += +kilos;
                break;
            case "peach":
                peachKG += +kilos;
                break;
            default:
                fruitsForRakia += +kilos;
                break;

        }
    }
    let cherryKompots = Math.floor(((cherryKG * 1000) / 9) / 25);
    let plumKompots = Math.floor(((plumKG * 1000) / 20) / 10);
    let peachKompots = Math.floor(((peachKG * 1000) / 140) / 2.5);
    let rakia = Math.floor(fruitsForRakia * 0.2);

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakita liters: ${rakia.toFixed(2)}`);

}
makeKompot(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20'
]);

makeKompot(['apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65',
    'watermelon 20.54'
]);
function heroicInventory(input) {
    let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let currHeroData = input[i].split(" / ");

        let currHeroName = currHeroData[0];
        let currHeroLevel = +currHeroData[1];
        let currHeroItems = [];

        if (currHeroData.length > 2) {
            currHeroItems = currHeroData[2].split(", ");
        }
        let hero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
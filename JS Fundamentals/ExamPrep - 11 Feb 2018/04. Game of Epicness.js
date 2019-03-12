function solve(kingdomsArr, battlesArr) {
    let kingdomMap = new Map();
    for (let kingdomObj of kingdomsArr) { //fill the kingdom map
        let kingdomName = kingdomObj["kingdom"];
        let generalName = kingdomObj["general"];
        let army = kingdomObj["army"];

        if (!kingdomMap.has(kingdomName)) {
            kingdomMap.set(kingdomName, new Map());
        }
        let generalsMap = kingdomMap.get(kingdomName);
        if (!generalsMap.has(generalName)) { //add general
            generalsMap.set(generalName, {armyCount: army, wins: 0, loses: 0});
        }
        else { // add army to the same general
            let generalObj = generalsMap.get(generalName);
            generalObj["armyCount"] += army;
        }
    }
    for (let row of battlesArr) { // make battle
        let [atcKingdom, atcGeneral, defKingdom, defGeneral] = row;

        if (atcKingdom === defKingdom) { //same kingdoms check
            continue;
        }

        let attakingArmy = kingdomMap.get(atcKingdom).get(atcGeneral);
        let defendingArmy = kingdomMap.get(defKingdom).get(defGeneral);

        if (attakingArmy["armyCount"] > defendingArmy["armyCount"]) {
            attakingArmy["wins"]++;
            defendingArmy["loses"]++;
            attakingArmy['armyCount'] = Math.floor(attakingArmy['armyCount'] * 1.1);
            defendingArmy['armyCount'] = Math.floor(defendingArmy['armyCount'] * 0.9);
        }
        if (attakingArmy["armyCount"] < defendingArmy['armyCount']) {
            attakingArmy["loses"]++;
            defendingArmy["wins"]++;
            attakingArmy['armyCount'] = Math.floor(attakingArmy['armyCount'] * 0.9);
            defendingArmy['armyCount'] = Math.floor(defendingArmy['armyCount'] * 1.1);
        }
    }
    let sortedKingdom = [...kingdomMap.entries()] // sort kingdom
        .sort(sortKingdoms)[0];
    console.log(`Winner: ${sortedKingdom[0]}`);
    let sortedGenerals = [...sortedKingdom[1].entries()]
        .sort((a, b) => {
            let aCount = a[1]['armyCount'];
            let bCount = b[1]['armyCount'];

            return bCount - aCount;
        });

    for (let [generalName, generalObj] of sortedGenerals) {
        console.log(`/\\general: ${generalName}`);
        console.log(`---army: ${generalObj['armyCount']}`);
        console.log(`---wins: ${generalObj['wins']}`);
        console.log(`---losses: ${generalObj['loses']}`);
    }

    function sortKingdoms(a, b) {
        let [kingdomAName, generalAMap] = a;
        let [kingdomBName, generalBMap] = b;
        let kingdomAWins = [...generalAMap.entries()]
            .map(kA => kA[1]["wins"])
            .reduce((c, d) => c + d);
        let kingdomBWins = [...generalBMap.entries()]
            .map(kB => kB[1]["wins"])
            .reduce((c, d) => c + d);
        let firstCriteria = kingdomBWins - kingdomAWins;
        if (firstCriteria === 0) {
            let kingdomALosses = [...generalAMap.entries()]
                .map(kA => kA[1]["loses"])
                .reduce((c, d) => c + d);
            let kingdomBLosses = [...generalBMap.entries()]
                .map(kB => kB[1]["loses"])
                .reduce((c, d) => c + d);
            let secondCriteria = kingdomALosses - kingdomBLosses;
            if (secondCriteria === 0) {
                return kingdomAName.localeCompare(kingdomBName);// 3.sort by name
            }
            return secondCriteria;// 2.sort by loses
        }
        return firstCriteria; // 1.sort by wins
    }
}

solve([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);
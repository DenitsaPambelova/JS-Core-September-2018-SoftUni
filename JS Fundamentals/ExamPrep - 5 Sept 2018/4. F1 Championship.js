function championshipF1(input) { // with Map
    let map = new Map();
    for (let obj of input) {
        let [teamName, pilotName, points] = obj.split(" -> ");
        if (!map.has(teamName)) {
            map.set(teamName, new Map());
        }
        if (!map.get(teamName).has(pilotName)) {
            map.get(teamName).set(pilotName, +points);
        } else {
            map.get(teamName).set(pilotName, map.get(teamName).get(pilotName) + Number(points));
        }
    }
    let sortedMaps = [...map].sort((a, b) => [...b[1].values()]
        .reduce((a, b) => a + b) - [...a[1].values()]
        .reduce((a, b) => a + b)).slice(0, 3);
    for (let [team, pilot] of sortedMaps) {
        console.log(`${team}: ${[...pilot.values()].reduce((a, b) => a + b)}`);
        let sortedPilots = [...pilot].sort((a, b) => b[1] - a[1]);
        for (let [pilot, points]of sortedPilots) {
            console.log(`-- ${pilot} -> ${points}`);
        }
    }
}

championshipF1(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);


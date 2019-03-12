function arenaTier(arr) {
    let result = {};
    for (let string of arr) {
        if (string.includes(' -> ')) {
            let [name, item, score] = string.split(' -> ');
            if (!result.hasOwnProperty(name)) {
                result[name] = {};
                result[name][item] = Number(score);
                result[name]['__total__'] = Number(score);
            } else {
                if (!result[name].hasOwnProperty(item)) {
                    result[name][item] = Number(score);
                    result[name]['__total__'] += Number(score);
                } else {
                    if (result[name][item] < score) {
                        result[name]['__total__'] -= result[name][item];
                        result[name]['__total__'] += Number(score);
                        result[name][item] = Number(score);
                    }
                }
            }
        } else if (string.includes(' vs ')) {
            let [gladiator1, gladiator2] = string.split(" vs ");
            if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)) {
                for (let g1Item in result[gladiator1]) {
                    let g1Score = result[gladiator1][g1Item];
                    let g2Score = result[gladiator2][g1Item];
                    if (g1Score && g2Score && g1Item !== "__total__") {
                        if (g1Score > g2Score) {
                            delete result[gladiator2];
                            break;
                        } else if (g1Score < g2Score) {
                            delete result[gladiator1];
                            break;
                        }
                    }
                }
            }
        }
        else {
            break;
        }
    }
    let sortedGladiators = Object.keys(result).sort((g1, g2) => {
        let diffInScore = result[g2]["__total__"] - result[g1]["__total__"];
        if (diffInScore === 0) {
            return g1.localeCompare(g2);
        }
        return diffInScore;
    });
    for (let gladiator of sortedGladiators) {
        console.log(`${gladiator}: ${result[gladiator]["__total__"]} skill`);
        let sortedItems = Object.keys(result[gladiator]).filter(i => i !== "__total__")
            .sort((a, b) => {
                let diffInScore = result[gladiator][b] - result[gladiator][a];
                if (diffInScore === 0) {
                    return a.localeCompare(b);
                }
                return diffInScore;
            });
        for (const item of sortedItems) {
            console.log(`- ${item} <!> ${result[gladiator][item]}`);
        }
    }

}

arenaTier(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);

arenaTier(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar']);
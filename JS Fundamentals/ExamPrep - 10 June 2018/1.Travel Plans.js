function f(arr) {
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let avarege = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];

    let totalCash = 0;
    let specializedCount = 0;
    let clumsyCount = 0;

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(" : ");
        let professions = tokens[0];
        let gold = +tokens[1];
        if (specialized.includes(professions) && gold >= 200) {
            totalCash += gold * 0.8;
            specializedCount++;
            if (specializedCount % 2 === 0) {
                totalCash += 200;
            }
        }
        else if (avarege.includes(professions)) {
            totalCash += gold;
        }
        else if (clumsy.includes(professions)) {
            clumsyCount++;
            if (clumsyCount % 2 === 0) {
                totalCash += gold * 0.95;
            }
            else if (clumsyCount % 3 === 0) {
                totalCash += gold * 0.9;
            } else {
                totalCash += gold;
            }
        }
    }
    if (totalCash < 1000) {
        console.log(`Final sum: ${totalCash.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - totalCash).toFixed(2)} gold more to continue in the next task.`)
    }
    else {
        console.log(`Final sum: ${totalCash.toFixed(2)}`);
        console.log(`Mariyka earned ${(totalCash - 1000).toFixed(2)} gold more.`)
    }
}

// f(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
f(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100",
    "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
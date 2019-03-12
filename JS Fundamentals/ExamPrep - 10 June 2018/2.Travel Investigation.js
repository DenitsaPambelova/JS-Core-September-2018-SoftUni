function f(arr) {

    let validSentences = [];
    let invalidSentences = [];

    let companies = arr[0];
    let delimiter = arr[1];

    companies = companies.split(delimiter).map(x => x.trim());

    for (let line of arr.splice(2)) {

        line = line.toLowerCase();

        let companyIsInSentence = true;

        for (let company of companies) {
            if (!line.includes(company)) {
                companyIsInSentence = false;
            }
        }
        if (companyIsInSentence) {
            validSentences.push(line);
        } else {
            invalidSentences.push(line);
        }
    }
    if (validSentences.length > 0) {
        console.log("ValidSentences");
        for (let i = 0; i < validSentences.length; i++) {
            console.log(`${i+1}. ${validSentences[i]}`);
        }
    }
    if (validSentences.length > 0 && invalidSentences.length > 0) {
        console.log("=".repeat(30));
    }
    if (invalidSentences.length > 0) {
        console.log("InvalidSentences");
        for (let i = 0; i < invalidSentences.length; i++) {
            console.log(`${i+1}. ${invalidSentences[i]}`);
        }
    }
}

// f(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//     "someone continues as no "]
// );
f(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);
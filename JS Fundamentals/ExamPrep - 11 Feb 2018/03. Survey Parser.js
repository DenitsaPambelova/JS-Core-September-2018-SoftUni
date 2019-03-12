function solve(input) {
    let surveyReg = /<svg>((.|\n)*?)<\/svg>/g;
    let catReg = /<cat><text>((.|\n)*?)\[((.|\n)*?)]((.|\n)*?)<\/text><\/cat>\s*<cat>((.|\n)*?)<\/cat>/g;
    let ratingsReg = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;

    if (!surveyReg.test(input)) {
        console.log('No survey found');
    } else if (!catReg.test(input)) {
        console.log('Invalid format');
    } else {
        catReg = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
        let matches = catReg.exec(input);
        let label = matches[3];
        let ratings = ratingsReg.exec(input);
        let sum = 0;
        let votesCount = 0;
        while (ratings) {
            let value = Number(ratings[1]);
            let count = Number(ratings[2]);

            if (value <= 0 || value > 10) {
                ratings = ratingsReg.exec(input);
                continue;
            }

            sum += value * count;
            votesCount += count;
            ratings = ratingsReg.exec(input);
        }

        let avg = +(sum / votesCount).toFixed(2);
        console.log(`${label}: ${avg}`);
    }
}


solve(`<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>`);
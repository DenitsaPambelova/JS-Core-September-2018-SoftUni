function f(input) {
    let start = input.shift();
    let end = input.shift();
    let specialWord = input.shift();
    let text = input.shift();

    //FIRST PART, EXTRACT THE COUNTRY
    let matched = text
        .match(new RegExp(/\b([A-z][a-z]+[A-Z])\b/));

    let country = Array.from(matched[0]);
    country.splice(start, (end - start + 1), specialWord);
    let result = country.shift() + country.map(e => e.toLowerCase()).join('') + ' => ';

    //SECOND PART, EXTRACT NUMBER, CONVERT NUMBER, USE ASCII
    let numbers = text
        .match(new RegExp(/[0-9]{3}\.?[0-9]*/gm));

    let country2 = numbers.map(num => {
        return String.fromCharCode(Math.ceil(num));
    });

    result += country2.shift().toUpperCase() + country2.map(e => e.toLowerCase()).join('');
    console.log(result);
}

f(["3", "5", "gar",
    "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
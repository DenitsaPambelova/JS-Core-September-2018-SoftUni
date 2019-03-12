function findNames(input) {
    let pattern = /\b_{1}[A-Za-z0-9]+\b/g;
    let result = input.match(pattern);

    console.log(result.map(element => element.substr(1)).join(","));
}
findNames('The _id and _age variables are both integers.');
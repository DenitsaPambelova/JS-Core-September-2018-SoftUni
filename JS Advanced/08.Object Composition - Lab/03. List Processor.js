function solve(input) {
    let command = (function () {
        let arr = [];
        let processor = {
            add: (el) => arr.push(el),
            remove: (el) => arr = arr.filter(x => x !== el),
            print: () => console.log(arr.join(","))
        };
        return processor;
    }());
    for (let currLine of input) {
        let tokens = currLine.split(' ');
        let commandName = tokens[0];
        command[commandName](tokens[1]);
    }
}

console.log(solve(['add hello', 'add again', 'remove hello', 'add again', 'print']));
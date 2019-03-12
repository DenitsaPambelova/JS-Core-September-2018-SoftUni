function solve(input) {
    let commandExecutor = (function () {
        let objs = {};

        function create(command) {
            let commandArgs = command.split(' ');
            let name = commandArgs[1];
            if (commandArgs.length > 2) {
                objs[name] = Object.create(objs[commandArgs[3]]);
            } else {
                objs[name] = {};
            }
        }

        function set(command) {
            let commandArgs = command.split(' ');
            let objName = commandArgs[1];
            let key = commandArgs[2];
            let value = commandArgs[3];
            objs[objName][key] = value;
        }

        function print(command) {
            let commandArgs = command.split(' ');
            let name = commandArgs[1];
            let keyValueToString = [];
            let currObj = objs[name];
            for (let key in currObj) {
                keyValueToString.push(`${key}:${currObj[key]}`);
            }
            console.log(keyValueToString.join(', '));
        }

        return {create, set, print}
    }());
    for (let currElement of input) {
        let command = currElement.split(' ')[0];
        commandExecutor[command](currElement);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
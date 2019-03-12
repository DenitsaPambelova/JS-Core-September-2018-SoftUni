function addOrRemoveElements(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "add") {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    if (result[0] == null) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element));
    }
}
// addOrRemoveElements(['add', 
// 'add', 
// 'add', 
// 'add']
// );
// addOrRemoveElements(['remove', 
// 'remove', 
// 'remove']
// );
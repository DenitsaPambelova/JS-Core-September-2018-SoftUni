function diagonalSum(input) {
    let firstSum = input.map((item, index) => {
        return item.map((type) => {
            return +type;
        }).filter((innerItem, innerIndex) => {
            return innerIndex === index;
        })[0];
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    let secondSum = input.map((item, index) => {
        return item.map((type) => {
            return +type;
        }).filter((innerItem, innerIndex) => {
            return innerIndex === item.length - 1 - index;
        })[0];
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    console.log([firstSum, secondSum].join(" "));

}
// diagonalSum([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]
// ]);
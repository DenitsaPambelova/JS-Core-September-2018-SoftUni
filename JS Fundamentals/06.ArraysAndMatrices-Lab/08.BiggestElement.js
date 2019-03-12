function biggestElemnt(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        element => element.forEach(
        c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}
// console.log(biggestElemnt([[20, 50, 10],
//     [8, 33, 145]]
//    ));
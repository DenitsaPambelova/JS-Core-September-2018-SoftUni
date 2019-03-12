function equalNeighbors(matrix) {
    let counter = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            if (matrix[row][cow] === matrix[row+1][cow]) {
                counter++;
            }
            if ( matrix[row][cow] === matrix[row][cow + 1]) {
                counter++;
            }
        }
    }
    return counter;
}
console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]))
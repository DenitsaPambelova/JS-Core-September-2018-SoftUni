function solve(rows, commands) {
    let matrix = [];
    const breezeDrop = 15;
    const galeDrop = 20;
    rows.forEach((row, i) => {
        matrix.push(row.split(' ').map(Number)); //all arr split and make all element number
    });

    let commandExceture = { //object with functions
        "breeze": (rowIndex) => breeze(rowIndex),
        "gale": (colIndex) => gale(colIndex),
        "smog": (value) => smog(value)
    };
    for (let row of commands) { // get command and number
        let [command, num] = row.split(" ");
        num = +num;
        commandExceture[command](num);
    }
    let pollutedAries = []; // arr for element with > 50
    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el >= 50) {
                pollutedAries.push(`[${i}-${j}]`); //push (row,cow) for element with > 50
            }
        })
    });
    if (pollutedAries.length > 0) {
        console.log(`Polluted areas: ${pollutedAries.join(", ")}`);
    } else {
        console.log("No polluted areas")
    }

    function breeze(rowIndex) {
        let matrixRow = matrix[rowIndex];
        for (let i = 0; i < matrixRow.length; i++) {
            matrixRow[i] = Math.max(0, matrixRow[i] - breezeDrop);
        }
    }

    function gale(colIndex) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][colIndex] = Math.max(0, matrix[i][colIndex] - galeDrop);
        }

    }

    function smog(value) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[i][j] += value;
            }
        }
    }
}
solve([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);
solve([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
)
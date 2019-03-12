function sumByTowns(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i++) {
        let currTown = i % 2 === 0 ? arr[i] : arr[i - 1];
        if (i % 2 === 0) {
            if (!towns.hasOwnProperty(currTown)) {
                towns[currTown] = 0;
            }
        } else {
            towns[currTown] += Number(arr[i]);
        }
    }
    console.log(JSON.stringify(towns));
}
sumByTowns(['Sofia',
'20',
'Varna',
'3',
'sofia',
'5',
'varna',
'4']
);
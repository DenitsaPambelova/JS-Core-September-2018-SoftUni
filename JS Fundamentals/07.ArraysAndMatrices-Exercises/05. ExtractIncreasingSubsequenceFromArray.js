function increasingSeq(input) {
    let biggestNum = 0;
    input.forEach(element => {
        if (element >= biggestNum) {
            biggestNum = element;
            console.log(element);
        }
    });
}
// increasingSeq([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     );
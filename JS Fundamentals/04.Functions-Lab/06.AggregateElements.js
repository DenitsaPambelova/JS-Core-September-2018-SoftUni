function operatingElements(input) {
    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1 / b);
    aggregate(input, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let index = 0; index < arr.length; index++) {
            val = func(val, arr[index]);
        }
        console.log(val);
    }
}
// operatingElements([1, 2, 3]);
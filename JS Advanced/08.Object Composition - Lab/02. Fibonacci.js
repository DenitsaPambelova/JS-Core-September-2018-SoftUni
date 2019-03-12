function getFibonacci() {
    let f1 = 0;
    let f2 = 1;
    return function () {
        let sum = f1 + f2;
        f1 = f2;
        f2 = sum;
        return f1;
    };
}

let fib = getFibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
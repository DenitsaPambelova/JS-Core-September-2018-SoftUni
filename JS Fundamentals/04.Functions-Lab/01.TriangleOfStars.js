function printTriangle(n) {
    function printStars(count) {
        console.log("*".repeat(count));
    }
    for (let index = 1; index <= n; index++) {
        printStars(index);
    }
    for (let index = n - 1; index > 0; index--) {
        printStars(index);
    }
}
// printTriangle(2);
function square(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count - 1));
    }
    for (let index = 1; index <= n; index++) {
        printStars();
    }
}

// square(3);
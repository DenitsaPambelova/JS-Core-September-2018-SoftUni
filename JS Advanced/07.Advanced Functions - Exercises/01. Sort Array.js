function sort(array, order) {
    if (order === "asc") {
        return (array.sort((a, b) => {
            return a - b
        }));
    } else {
        return (array.sort((a, b) => {
            return b - a
        }));
    }
}

sort([14, 7, 17, 6, 8], 'asc')
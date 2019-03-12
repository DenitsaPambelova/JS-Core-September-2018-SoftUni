function distanceBetweeb2Points([x1, y1, z1, x2, y2, z2]) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) +
        Math.pow(z1 - z2, 2));
    console.log(distance);
}
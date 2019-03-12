function gradToDegree(input) {
    let diffDeg = 400 / 360;
    let convertgGradToDeg = Number(input) / diffDeg;
    convertgGradToDeg = convertgGradToDeg % 360;

    if (convertgGradToDeg < 0) {
        convertgGradToDeg += 360;
    }
    console.log(convertgGradToDeg);
}

function imperialTounits(input) {
    let feet = Math.floor(input / 12);
    let inchesLeft = input % 12;
    
    console.log(`${feet}'-${inchesLeft}"`);
}
function musicTrack(input) {
    let nameOfTrack = String(input[0]);
    let nameOfArtist = String(input[1]);
    let duration = String(input[2]);

    console.log("Now Playing: " + nameOfArtist + " - " + nameOfTrack + " [" + duration + "]");
}
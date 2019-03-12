function raceF1(input) {
    let pilots = input.shift().split(" "); // remove first line in input and split it
    for (let data of input) {
        let event = data.split(" ")[0];
        let pilot = data.split(" ")[1];
        switch (event) {
            case "Join":
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case "Crash":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot); // get pilot index from array
                    pilots.splice(index, 1) // remove pilot from pilots with his index\
                }
                break;
            case "Pit":
                if (pilots.includes((pilot))) {
                    let index = pilots.indexOf((pilot));
                    if (index !== pilots.length - 1) { // check the last position
                        pilots.splice(index, 1); //remove pilot from his position
                        pilots.splice(index + 1, 0, pilot) // put pilot in one position back
                    }
                }
                break;
            case"Overtake":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf((pilot));
                    if (index !== 0) { // check if pilot is in first position
                        pilots.splice(index, 1);
                        pilots.splice(index - 1, 0, pilot); // put pilot in on position up
                    }
                }
                break;
        }
    }
    console.log(pilots.join(" ~ "));
}

raceF1(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"
]);
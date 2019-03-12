function attachEventsListeners() {
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let daysBtn = document.getElementById("daysBtn");
    daysBtn.addEventListener("click", function () {
        if (days.value !== "") {
            hours.value = days.value * 24;
            minutes.value = days.value * 1440;
            seconds.value = days.value * 86400;
        }
    });

    let hoursBtn = document.getElementById("hoursBtn");
    hoursBtn.addEventListener("click", function () {
        if (hours.value !== "") {
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = hours.value * 3600;
        }
    });

    let minutesBtn = document.getElementById("minutesBtn");
    minutesBtn.addEventListener("click", function () {
        if (minutes.value !== "") {
            days.value = (minutes.value / 60) / 24;
            hours.value = minutes.value / 60;
            seconds.value = minutes.value * 60;
        }
    });

    let secondsBtn = document.getElementById("secondsBtn");
    secondsBtn.addEventListener("click", function () {
        if (seconds.value !== "") {
            days.value = (seconds.value / 3600) / 24;
            hours.value = (seconds.value / 60) / 60;
            minutes.value = seconds.value / 60;
        }
    });
}
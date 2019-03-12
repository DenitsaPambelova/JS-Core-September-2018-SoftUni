function attachEvents() {
    const host = 'https://judgetests.firebaseio.com/';
    const symbols = {
        "Sunny": '&#x2600;',
        "Partly sunny": '&#x26C5;',
        "Overcast": '&#x2601;',
        "Rain": '&#x2614;'
    };

    $('#submit').on("click", getWeather);

    function getWeather() {
        let locationName = $('#location').val();

        $.get(host + "locations.json")
            .then(parseData);

        function parseData(codes) {
            let code = undefined;
            for (let location of codes) {
                if (location.name === locationName) {
                    code = location.code;
                    break;
                }
            }
            Promise.all([
                $.get(host + `forecast/today/${code}.json`),
                $.get(host + `forecast/upcoming/${code}.json`)
            ]).then(displayResults)
        }

        function displayResults([today, upcoming]) {
            let symbol = symbols[today.forecast.condition];

            const todayDiv = $('#current');
            const upcomingDiv = $("#upcoming");

            const htmlSymbol = `<span class="conditional symbol">${symbol}</span>`;
            const htmlContent = `<span class="condition"><span class="forecast-data">${today.name}</span><span
                    class="forecast-data">${today.forecast.low}&#176; / ${today.forecast.high}&#176;</span><span class="forecast-data">${today.forecast.condition}</span></span>`;

            todayDiv.empty();
            todayDiv.append(`<div class="label">Current conditions</div>`);
            todayDiv.append(htmlSymbol);
            todayDiv.append(htmlContent);

            upcomingDiv.empty();
            upcomingDiv.append(`<div class="label">Three-day forecast</div>`);
            for (let day of upcoming.forecast) {
                upcomingDiv.append(upComing(day));
            }

            $('#forecast').show();
        }

        function upComing(data) {
            let symbol = symbols[data.condition];
            return `<span class="upcoming"><span
                class="symbol">${symbol}</span><span
                 class="condition"><span class="forecast-data">${data.low}&#176; / ${data.high}&#176;</span><span
                    class="forecast-data">${data.condition}</span></span>`;
        }
    }

}

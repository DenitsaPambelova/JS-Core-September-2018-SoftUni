function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", calculate);
    let values = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    };

    function calculate() {
        let number = document.getElementById("inputDistance").value;
        let inputRate = document.getElementById("inputUnits").value;
        let outputRate = document.getElementById("outputUnits").value;

        let result = number * (values[inputRate] / values[outputRate]);
        document.getElementById("outputDistance").value = result;
    }
}
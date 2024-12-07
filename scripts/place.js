// Weather

// Define temperature and wind speed values
// Celsius value set temperature
let tempC = 25;
// Wind speed in km/h
let windSpeedKmh = 6;

// Calculate wind chill
const calculateWindChill = (tempC, windSpeedKmh) =>
    (tempC <= 10 && windSpeedKmh > 4.8)
        ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh / 3.6, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh / 3.6, 0.16)).toFixed(2)
        : "N/A";

function updateDisplay() {
    const windChill = calculateWindChill(tempC, windSpeedKmh);
    document.getElementById('temperature-display').textContent = tempC;
    document.getElementById('wind-speed-display').textContent = windSpeedKmh;
    document.getElementById('result').textContent = windChill === "N/A"
        ? "N/A"
        : `${windChill} °C`;
}

//Update display initially
updateDisplay();


document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("select");

    // Clave de API de TimeZoneDB (reemplázala con la tuya)
    const API_KEY = "4XKW2JNNMJ8K";
    const BASE_URL = "https://api.timezonedb.com/v2.1";

    // Obtiene la lista de zonas horarias
    fetch(`${BASE_URL}/list-time-zone?key=${API_KEY}&format=json`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                populateTimezones(select, data.zones);
                select.addEventListener("change", () => updateTime(select.value, API_KEY));
                updateTime(select.value, API_KEY); // Llamada inicial
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => console.error("Fetch error:", error));
});

function populateTimezones(select, zones) {
    select.innerHTML = '';
    zones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone.zoneName; // Nombre único de la zona horaria
        option.text = zone.zoneName;
        select.appendChild(option);
    });

    const randomIndex = Math.floor(Math.random() * zones.length);
    select.selectedIndex = randomIndex;
}

function updateTime(timezone, apiKey) {
    const BASE_URL = "https://api.timezonedb.com/v2.1";

    // Obtiene la hora de una zona específica
    fetch(`${BASE_URL}/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${timezone}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                const { formatted, zoneName } = data;
                displayDateTime(formatted);
                updateTimeZone(zoneName);
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => console.error("Fetch error:", error));
}

function displayDateTime(dateTimeString) {
    const time = document.getElementById("time");
    const date = document.getElementById("date");

    const [dateDay, dateTime] = dateTimeString.split(" ");
    time.textContent = dateTime;
    date.textContent = dateDay;
}

function updateTimeZone(timezone) {
    document.getElementById("timeZone").textContent = "Zona horaria: " + timezone;
}

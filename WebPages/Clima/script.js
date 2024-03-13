const Input = document.getElementById("search")
function handleKeyPress(event){
    if(event.keyCode === 13){
        fetchWeather();
    }
}
Input.addEventListener('keypress', handleKeyPress);

async function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block"
    const apiKey="d1b546d52ed09a07163e609b2b37b060"
    if(searchInput === ""){
        alert('Por favor ingresa una ciudad válida')
    }

    async function getLonAndLat() {
        const countryCode = 51
        geocodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`
        const response = await fetch(geocodeURL);
        if(!response.ok) {
          console.log("Bad response! ", response.status);
          return;
        }
        const data = await response.json();
        if(data.length == 0){
            console.log("se rompio la vaina xd");
            alert('Algo salio mal! Por favor ingresa una ciudad válida')
            return;
        }
        else{
            return data[0];
        }
    }

    async function getWeatherData(lon, lat){
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        const response = await fetch(weatherURL);
        if(!response.ok) {
        console.log("Se rompió la wbda xd", response.status);
        return;
        }

        const data = await response.json();

        weatherDataSection.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
        <div>
        <h2>${data.name}</h2>
        <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
        </div>`
    }

    document.getElementById("search").value = "";
    const geocodeData = await getLonAndLat();
    getWeatherData(geocodeData.lon, geocodeData.lat);

    return;
}

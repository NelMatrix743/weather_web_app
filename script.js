// define utilities
async function retrieveWeatherInfo(apiKey, cityName){
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    const response = await fetch(API_URL);
    let jsonData = await response.json();
    //console.log(jsonData);
    document.querySelector(".city").innerHTML = jsonData.name;
    document.querySelector(".temp").innerHTML = Math.round(jsonData.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = jsonData.main.humidity + '%';
    document.querySelector(".wind-speed").innerHTML = jsonData.wind.speed + " km/h";
}


// enter your API KEY here
const API_KEY = "";

const searchButton = document.querySelector(".search button");
let cityNameInput = document.querySelector(".search input");

// use utilities
searchButton.addEventListener("click", () => {
    retrieveWeatherInfo(API_KEY, cityNameInput.value);
});
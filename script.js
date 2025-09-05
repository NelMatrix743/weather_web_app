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

    let weatherImager = document.querySelector(".weather-imager");

    switch(jsonData.weather[0].main){
        case "Clouds":
            weatherImager.src = "assets/images/clouds.png";
            break;
        case "Clear":
            weatherImager.src = "assets/images/clear.png";
            break;
        case "Rain":
            weatherImager.src = "assets/images/rain.png";
            break;
        case "Drizzle":
            weatherImager.src = "assets/images/drizzle.png";
            break;
        case "Mist":
            weatherImager.src = "assets/images/mist.png";
            break;
        default:
            weatherImager.src = "assets/images/place_holder_2.png";
    }
    document.querySelector(".weather-info").style.display = "block";
}

const searchButton = document.querySelector(".search button");
const cityNameInput = document.querySelector(".search input");

// enter your API KEY here
const API_KEY = "";

// use utilities
searchButton.addEventListener("click", () => {
    retrieveWeatherInfo(API_KEY, cityNameInput.value);
});
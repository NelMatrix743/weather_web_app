// city name
let cityName = "abidjan";

// enter your API KEY here
const API_KEY = "";

// define API URL
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`;

async function retrieveWeatherInfo(){
    const response = await fetch(API_URL);
    let jsonData = await response.json();
    console.log(jsonData);
}

retrieveWeatherInfo();
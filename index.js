let cityName = document.querySelector(".city-name");
let temperatureSpan = document.querySelector(".temperature-span");
let condition = document.querySelector(".condition");
let weatherData = document.querySelector(".weather-details");

let input = document.querySelector(".search-input");
let submit = document.querySelector("#submit");

let ApiKey = "556f311f6005f24a4ab659f431378c68";
let APiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

submit.addEventListener("click", (e) => {
  if (input.value != "") {
    checkWeather(input.value);
  }
});

input.addEventListener("click", () => {
  weatherData.style.display = "none";
});

async function checkWeather(city) {
  let response = await fetch(APiUrl + city + `&appid=${ApiKey}`);
  if (response.status === 404) {
    alert("Please enter a valid name");
    input.value = "";
  } 
  else {
    let data = await response.json();
    console.log(data);
    input.value = "";
    weatherData.style.display = "inline-block";
    cityName.innerHTML = data.name;
    temperatureSpan.innerHTML = `${Math.round(data.main.temp)} °C`;
    condition.innerHTML = data.weather[0].main;
  }
}

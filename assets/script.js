const searchButton = document.getElementById(".searchBar");
const apiKey = "68720197936e62b9527492c3bc6e930e";
const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?";
const url = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial";

let weather = {
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
      .then((response) => response.json()).then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".cityName").innerText = "The weather in " + name + " is...";
    document.querySelector(".description").innerText = "Condition: " + description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Oh! the Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "MPH";
    document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?" + description + "\")";
    this.fetchForecast(data);
  },

  fetchForecast: function (data) {
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial").then((response) => response.json()).then((data) => displayForecast(data));


    function displayForecast(data) {
      for (let i = 0; i < 5; i++) {
        const temp2 = data.list[i].main.temp;
        const humidity2 = data.list[i].main.humidity;
        const wind2 = data.list[i].wind.speed;
        document.querySelector(`.day${i + 2}Temp`).innerHTML = temp2 + "°F";
        document.querySelector(`.day${i + 2}Humidity`).innerHTML = "Humidity: " + humidity2 + "%";
        document.querySelector(`.day${i + 2}Wind`).innerHTML = "Wind Speed: " + wind2 + "MPH";
      } forecast.search();
    }
  },

  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },
};

document.querySelector(".mainBtn").addEventListener("click", function () {
  weather.search();
});
document.querySelector(".searchBar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
})
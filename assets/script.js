const searchButton = document.getElementById(".searchBar");
const apiKey = "68720197936e62b9527492c3bc6e930e";
const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?";
const url = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial";

// This calls the Weather API and returns the data as a string
let weather = {
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
      .then((response) => response.json()).then((data) => this.displayWeather(data));
  },

  // creates variables to call the data
  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // calls the data from the API and plugs into "today's card" in HTML
    document.querySelector(".cityName").innerText = "The weather in " + name + " is...";
    document.querySelector(".description").innerText = "Condition: " + description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Oh! the Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "MPH";
    // The below line sets a random, weather-based background image matching the results provided by the search parameters
    document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?" + description + "\")";
    this.fetchForecast(data);
  },

  // Pulls data from the API based on Lat and Lon to return the 5 day forecast
  fetchForecast: function (data) {
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial").then((response) => response.json()).then((data) => displayForecast(data));
    
    function displayForecast(data) {
      for (let i = 0; i < 5; i++) {
        const temp2 = data.list[i].main.temp;
        const humidity2 = data.list[i].main.humidity;
        const wind2 = data.list[i].wind.speed;
        // breaks apart the results and returns to each daily card, up to 6
        document.querySelector(`.day${i + 2}Temp`).innerHTML = temp2 + "°F";
        document.querySelector(`.day${i + 2}Humidity`).innerHTML = "Humidity: " + humidity2 + "%";
        document.querySelector(`.day${i + 2}Wind`).innerHTML = "Wind Speed: " + wind2 + "MPH";
        // changes the background image to match the search results for "current weather" in the searched city
      } document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?" + description + "\")"; 
      forecast.search();
    }
  },

  // runs the function to start the search
  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },
};
// standard event listener for the search button
document.querySelector(".mainBtn").addEventListener("click", function () {
  weather.search();
});
// allows for "enter" to be placed when searching instead of requiring a mouse click
document.querySelector(".searchBar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
})
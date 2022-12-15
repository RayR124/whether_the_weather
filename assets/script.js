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

    let forecast = {
      fetchForecast: function (city) {
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial").then((response) => response.json()).then((data) => this.displayForecast(data));
        
        function displayForecast(data) {
          for (let i = 0; i < 5; i++) {
            if (data.list[i].dt_txt.slice(11, 13) == "12:");
          }
          const { temp2 } = data;
          const { humidity2 } = data.main;
          const { wind2 } = data.wind;
          document.querySelector(".day2Temp").innerText = temp2 + "°F";
          document.querySelector(".day2Humidity").innerText = "Humidity: " + humidity2 + "%";
          document.querySelector(".day2Wind").innerText = "Wind Speed: " + wind2 + "MPH";
          const { temp3 } = data;
          const { humidity3 } = data.main;
          const { wind3 } = data.wind;
          document.querySelector(".day3Temp").innerText = temp3 + "°F";
          document.querySelector(".day3Humidity").innerText = "Humidity: " + humidity3 + "%";
          document.querySelector(".day3Wind").innerText = "Wind Speed: " + wind3 + "MPH";
          const { temp4 } = data;
          const { humidity4 } = data.main;
          const { wind4 } = data.wind;
          document.querySelector(".day4Temp").innerText = temp4 + "°F";
          document.querySelector(".day4Humidity").innerText = "Humidity: " + humidity4 + "%";
          document.querySelector(".day4Wind").innerText = "Wind Speed: " + wind4 + "MPH";
          const { temp5 } = data;
          const { humidity5 } = data.main;
          const { wind5 } = data.wind;
          document.querySelector(".day5Temp").innerText = temp5 + "°F";
          document.querySelector(".day5Humidity").innerText = "Humidity: " + humidity5 + "%";
          document.querySelector(".day5Wind").innerText = "Wind Speed: " + wind5 + "MPH";
          const { temp6 } = data;
          const { humidity6 } = data.main;
          const { wind6 } = data.wind;
          document.querySelector(".day6Temp").innerText = temp6 + "°F";
          document.querySelector(".day6Humidity").innerText = "Humidity: " + humidity6 + "%";
          document.querySelector(".day6Wind").innerText = "Wind Speed: " + wind6 + "MPH";
        } displayForecast();
      }
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
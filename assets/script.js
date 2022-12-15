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
      fetchForecast: function (data) {
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial").then((response) => response.json()).then((data) => this.displayForecast(data));

        function displayForecast(data) {
          for (let i = 0; i < 5; i++) {
            const { temp2 } = data.list[i].main.temp;
            const { humidity2 } = data.list[i].main.humidity;
            const { wind2 } = data.wind.speed;
            document.querySelector(".day2Temp").innerHTML = temp2 + "°F";
            document.querySelector(".day2Humidity").innerHTML = "Humidity: " + humidity2 + "%";
            document.querySelector(".day2Wind").innerHTML = "Wind Speed: " + wind2 + "MPH";
          } for (let i = 0; i < 5; i++) {
            const { temp3 } = data.list[i].main.temp;
            const { humidity3 } = data.list[i].main.humidity;
            const { wind3 } = data.wind.speed;
            document.querySelector(".day3Temp").innerHTML = temp3 + "°F";
            document.querySelector(".day3Humidity").innerHTML = "Humidity: " + humidity3 + "%";
            document.querySelector(".day3Wind").innerHTML = "Wind Speed: " + wind3 + "MPH";
          } for (let i = 0; i < 5; i++) {
            const { temp4 } = data.list[i].main.temp;
            const { humidity4 } = data.list[i].main.humidity;
            const { wind4 } = data.wind.speed;
            document.querySelector(".day4Temp").innerHTML = temp4 + "°F";
            document.querySelector(".day4Humidity").innerHTML = "Humidity: " + humidity4 + "%";
            document.querySelector(".day4Wind").innerHTML = "Wind Speed: " + wind4 + "MPH";
          } for (let i = 0; i < 5; i++) {
            const { temp5 } = data.list[i].main.temp;
            const { humidity5 } = data.list[i].main.humidity;
            const { wind5 } = data.wind.speed;
            document.querySelector(".day5Temp").innerHTML = temp5 + "°F";
            document.querySelector(".day5Humidity").innerHTML = "Humidity: " + humidity5 + "%";
            document.querySelector(".day5Wind").innerHTML = "Wind Speed: " + wind5 + "MPH";
          } for (let i = 0; i < 5; i++) {
            const { temp6 } = data.list[i].main.temp;
            const { humidity6 } = data.list[i].main.humidity;
            const { wind6 } = data.wind.speed;
            document.querySelector(".day6Temp").innerHTML = temp6 + "°F";
            document.querySelector(".day6Humidity").innerHTML = "Humidity: " + humidity6 + "%";
            document.querySelector(".day6Wind").innerHTML = "Wind Speed: " + wind6 + "MPH";
          }
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
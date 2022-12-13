const searchButton = document.getElementById(".searchBar");
const apiKey = "68720197936e62b9527492c3bc6e930e";
//const inputVal = input.value;
const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?";
const url = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric";

let weather = {
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric")
      .then((response) => response.json()).then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".cityName").innerText = "Currently in " + name;
    document.querySelector(".description").innterText = description;
    document.querySelector(".temp").innerText = temp + "°";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "MPH";
  },

    search: function () {
      this.fetchWeather(document.querySelector(".searchBar").value);
    },
  };

    document.querySelector(".mainBtn").addEventListener("Click", function () {
      weather.search();
    });
    document.querySelector(".searchBar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    })
const searchButton = document.getElementById("searchInput")
const apiKey = //insert API key here
const geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='
const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
currentDate.innerHTML = '(' + today + ')';

var date2 = new Date();
var dd2 = String(date2.getDate() + 1).padStart(2, '0');
date2 = mm + '/' + dd2 + '/' + yyyy;
secondDay.innerHTML = date2

var date3 = new Date();
var dd3 = String(date3.getDate() + 2).padStart(2, '0');
date3 = mm + '/' + dd3 + '/' + yyyy;
thirdDay.innerHTML = date3

var date4 = new Date();
var dd4 = String(date4.getDate() + 3).padStart(2, '0');
date4 = mm + '/' + dd4 + '/' + yyyy;
fourthDay.innerHTML = date4

var date5 = new Date();
var dd5 = String(date5.getDate() + 4).padStart(2, '0');
date5 = mm + '/' + dd5 + '/' + yyyy;
fifthDay.innerHTML = date5

var date6 = new Date();
var dd6 = String(date6.getDate() + 5).padStart(2, '0');
date6 = mm + '/' + dd6 + '/' + yyyy;
sixthDay.innerHTML = date6
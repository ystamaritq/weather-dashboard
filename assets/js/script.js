// Variables
var cities = [];
var city = "";

if (localStorage.getItem("cities") !== null) {
	cities = JSON.parse(localStorage.getItem("cities"));
	cities.forEach((city) => {
		$("#cities-append").prepend(`<li class="list-group-item">${city}</li>`);
	});
}
// Functions
function loadWeather(city) {
	var queryUrl =
		"https://api.weatherapi.com/v1/forecast.json?key=df00607ac86544829aa40423201905&q=" +
		city +
		"&days=5";

	// ajax here
	$.getJSON(queryUrl, function (json) {
		$("#city").html(json.name);
		$("#main_weather").html(json.weather[0].main);
		$("#description_weather").html(json.weather[0].description);
		$("#weather_image").attr(
			"src",
			"http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
		);
		$("#temperature").html(json.main.temp);
		$("#pressure").html(json.main.pressure);
		$("#humidity").html(json.main.humidity);
	});
}

function addCity() {
	//getting the user city input text
	var city = $("#search-text").val();

	//append the city to the ul <li>city</li>
	$("#cities-append").prepend(`<li class="list-group-item">${city}</li>`);

	//added city to the array of cities to save at the local storage
	cities.push(city);

	//saving to the local storage array of cities
	localStorage.setItem("cities", JSON.stringify(cities));
}

// On Document Ready
$(document).ready(function () {
	$("#search-button").on("click", addCity);
});

// Variables
var cities = [];
var city = "";
var key = "df00607ac86544829aa40423201905";
var days = 5;

if (localStorage.getItem("cities") !== null) {
	cities = JSON.parse(localStorage.getItem("cities"));
	cities.forEach((city) => {
		$("#cities-append").prepend(`<li class="list-group-item">${city}</li>`);
	});
}
// Functions
function loadWeather(city) {
	var queryUrl = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}`;

	// ajax here (getting the json object)
	$.getJSON(queryUrl, function (json) {
		console.log(json);

		var currentCity = json.location.name;
		var date = new Date(json.location.localtime).toDateString();
		var iconUrl = "https:" + json.forecast.forecastday[0].day.condition.icon;

		//display the json data on the page
		$("#current-city").html(`${currentCity} - ${date} <img src="${iconUrl}">`);
		$("#temp").text(json.current.temp_f);
		$("#humidity").text(json.current.humidity);
		$("#wind").text(json.current.wind_mph);
		$("#uv-index").text(json.current.uv);
		$("#uv-index").removeClass([
			"badge-success",
			"badge-moderate",
			"badge-warning",
			"badge-danger",
		]);
		$("#uv-index").addClass(getUVColor(json.current.uv));
	});
}

function getUVColor(uv) {
	return "badge-moderate";
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

	loadWeather(city);
}

// On Document Ready
$(document).ready(function () {
	$("#search-button").on("click", addCity);
});

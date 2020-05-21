// Variables
var cities = [];
var city = "";
var key = "df00607ac86544829aa40423201905";
var days = 6;

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
		var uv = json.current.uv;

		//display the json data on the page
		$("#current-city").html(`${currentCity}  ${date}  <img src="${iconUrl}">`);
		$("#temp").text(" " + json.current.temp_f + " °F");
		$("#humidity").text(" " + json.current.humidity + " %");
		$("#wind").text(" " + json.current.wind_mph + " MPH");
		$("#uv-index").text("  " + uv);

		//remove the classes before to add the specific one
		$("#uv-index").removeClass([
			"badge-success", // color green low UV risk  (0 to 2 :  means low danger from the Sun's UV rays for the average person.)
			"badge-moderate", // color yellow moderate UV risk (3 to 5 :  means moderate risk of harm from unprotected Sun exposure.)
			"badge-warning", // color orange high UV risk (6 to 7 : means high risk of harm from unprotected Sun exposure. Protection against skin and eye damage is needed.)
			"badge-danger", // color red very high UV risk (8 to 10 : means very high risk of harm from unprotected Sun exposure. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.)
			"badge-extreme", // color purple extreme UV risk (11+ : means extreme risk of harm from unprotected Sun exposure. Take all precautions because unprotected skin and eyes can burn in minutes.)
		]);

		//adding the class that return the getUVColor(uv) function
		$("#uv-index").addClass(getUVColor(uv));

		$("#days-wrap").empty();

		for (var d = 1; d <= 2; d++) {
			var dateForecast = json.forecast.forecastday[d].date;
			var tempForecast = json.forecast.forecastday[d].day.maxtemp_f;
			var humidityForecast = json.forecast.forecastday[d].day.avghumidity;
			var conditionIcon = json.forecast.forecastday[d].day.condition.icon;

			$("#days-wrap").append(`
				<div class="card col-2 mr-1 bg-primary text-white">
					<span class="pb-3">${dateForecast}</span>
		   		    <img src="https:${conditionIcon}" style="width: 64px;>
		  		    <span>Temp:${tempForecast} F</span>
					<span>Humidity:${humidityForecast} %</span>
				</div>`);
		}
	});
}

function getUVColor(uv) {
	if (uv >= 0 && uv <= 2) {
		return "badge-success";
	} else if (uv >= 3 && uv <= 5) {
		return "badge-moderate";
	} else if (uv >= 6 && uv <= 7) {
		return "badge-warning";
	} else if (uv >= 8 && uv <= 10) {
		return "badge-danger";
	} else if (uv >= 11) {
		return "badge-extreme";
	}
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

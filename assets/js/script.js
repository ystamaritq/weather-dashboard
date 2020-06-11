// Variables
var cities = [];
var activeCity = "";
var key = "df00607ac86544829aa40423201905";
var days = 6;

// load last active city
if (localStorage.getItem("activeCity") !== null) {
	activeCity = localStorage.getItem("activeCity");
}

// load previously stored list of cities
if (localStorage.getItem("cities") !== null) {
	cities = JSON.parse(localStorage.getItem("cities"));
	loadCities();
}

// Functions
function loadWeather(city) {
	var queryUrl = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}`;

	// ajax here (getting the json object)
	$.getJSON(queryUrl, function (json) {
		var cityName = json.location.name;
		var date = new Date(json.location.localtime).toDateString();
		var iconUrl = "https:" + json.forecast.forecastday[0].day.condition.icon;
		var uv = json.current.uv;

		//display the json data on the page
		$("#current-city").html(`${cityName} -- ${date}  <img src="${iconUrl}">`);
		$("#temp").text(" " + json.current.temp_f + " °F");
		$("#humidity").text(" " + json.current.humidity + " %");
		$("#wind").text(" " + json.current.wind_mph + " MPH");
		$("#uv-index").text("  " + uv);

		//remove the classes before to add the specific one
		$("#uv-index").removeClass(
			"badge-success badge-moderate badge-warning badge-danger badge-extreme"
		);

		//adding the class that return the getUVColor(uv) function
		$("#uv-index").addClass(getUVColor(uv));

		$("#days-wrap").empty();

		var forecast = json.forecast.forecastday;

		for (var d = 0; d < 5; d++) {
			// sometimes the forecast doesn't have up to 5 days (paid vs free plan).
			// we are intentionally generating additional data to keep UI's style
			var data = json.forecast.forecastday[d % forecast.length];
			var dateForecast = data.date;
			var tempForecast = data.day.maxtemp_f;
			var humidityForecast = data.day.avghumidity;
			var conditionIcon = data.day.condition.icon;

			$("#days-wrap").append(`
				<div class="card col-lg-2 col-sm-3 py-2 mr-1 bg-primary text-white mt-2">
					<span class="card-title pb-3">${dateForecast}</span>
		   		    <img src="https:${conditionIcon}" width=64>
		  		    <span>Temp: ${tempForecast} F</span>
					<span>Humidity: ${humidityForecast} %</span>
				</div>`);
		}
	}).fail(function (err) {
		// remove invalid city from historical data
		removeCity(city);
		alert(err.responseJSON.error.message);
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

function loadCities() {
	//delete the cities to avoid repetitions
	$("#cities-append").empty();

	//look through the cities array to look for a city and change the background color if an active city
	cities.forEach((city) => {
		var activeClass = "bg-light";
		if (city === activeCity) activeClass = "bg-active";

		//attached the active class and the onclick event to the list item
		$("#cities-append").prepend(
			`<li class="list-group-item d-flex justify-content-between pr-2 pl-4 ${activeClass}" onclick="setActiveCity('${city}')">${city}
			<img class="img-custom" src="./assets/imgs/delete.png" alt="delete" onclick="removeCity('${city}', event)">
			</li>`
		);
	});

	if (activeCity) {
		loadWeather(activeCity);
		$(".display-modal-weather").removeClass("d-none");

		//hidden the other display
		$(".display-template").removeClass("d-flex");
		$(".display-template").addClass("d-none");
	} else {
		$(".display-modal-weather").addClass("d-none");
		$(".display-template").addClass("d-flex");
	}
}

function removeCity(city, event) {
	// remove cities that name matches city
	cities = cities.filter((c) => c !== city);

	//saving to the local storage array of cities
	localStorage.setItem("cities", JSON.stringify(cities));

	if (city === activeCity) {
		activeCity = null;
		localStorage.removeItem("activeCity");
	}

	loadCities();

	if (event) event.stopPropagation();
}

function addCity() {
	//getting the user city input text
	var city = $("#search-text").val();

	if (!cities.includes(city)) {
		//added city to the array of cities to save at the local storage
		cities.push(city);

		//saving to the local storage array of cities
		localStorage.setItem("cities", JSON.stringify(cities));
	}
	$(".display-modal-weather").removeClass("d-none");

	setActiveCity(city);

	$("#search-text").val("");
}

function setActiveCity(city) {
	activeCity = city;
	localStorage.setItem("activeCity", activeCity);
	loadCities();
}

// On Document Ready
$(document).ready(function () {
	$("#search-button").on("click", addCity);
});

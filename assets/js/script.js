// Variables

// Functions
function loadWeather(city) {
	// do ajax here

	var simualtedAjaxResponse = {
		location: {
			name: "Austin",
			region: "Texas",
			country: "United States of America",
			lat: 30.27,
			lon: -97.74,
			tz_id: "America/Chicago",
			localtime_epoch: 1590006150,
			localtime: "2020-05-20 15:22",
		},
		current: {
			last_updated_epoch: 1590005704,
			last_updated: "2020-05-20 15:15",
			temp_c: 33.9,
			temp_f: 93.0,
			is_day: 1,
			condition: {
				text: "Sunny",
				icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
				code: 1000,
			},
			wind_mph: 0.0,
			wind_kph: 0.0,
			wind_degree: 175,
			wind_dir: "S",
			pressure_mb: 1009.0,
			pressure_in: 30.3,
			precip_mm: 0.1,
			precip_in: 0.0,
			humidity: 47,
			cloud: 0,
			feelslike_c: 37.9,
			feelslike_f: 100.1,
			vis_km: 16.0,
			vis_miles: 9.0,
			uv: 11.0,
			gust_mph: 9.4,
			gust_kph: 15.1,
		},
		forecast: {
			forecastday: [
				{
					date: "2020-05-20",
					date_epoch: 1589932800,
					day: {
						maxtemp_c: 33.8,
						maxtemp_f: 92.8,
						mintemp_c: 22.5,
						mintemp_f: 72.5,
						avgtemp_c: 27.8,
						avgtemp_f: 82.0,
						maxwind_mph: 13.6,
						maxwind_kph: 22.0,
						totalprecip_mm: 0.1,
						totalprecip_in: 0.0,
						avgvis_km: 10.0,
						avgvis_miles: 6.0,
						avghumidity: 71.0,
						daily_will_it_rain: 0,
						daily_chance_of_rain: "0",
						daily_will_it_snow: 0,
						daily_chance_of_snow: "0",
						condition: {
							text: "Overcast",
							icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
							code: 1009,
						},
						uv: 11.0,
					},
					astro: {
						sunrise: "06:34 AM",
						sunset: "08:21 PM",
						moonrise: "05:30 AM",
						moonset: "06:39 PM",
					},
				},
				{
					date: "2020-05-21",
					date_epoch: 1590019200,
					day: {
						maxtemp_c: 31.4,
						maxtemp_f: 88.5,
						mintemp_c: 24.0,
						mintemp_f: 75.2,
						avgtemp_c: 27.4,
						avgtemp_f: 81.4,
						maxwind_mph: 15.0,
						maxwind_kph: 24.1,
						totalprecip_mm: 0.0,
						totalprecip_in: 0.0,
						avgvis_km: 9.6,
						avgvis_miles: 5.0,
						avghumidity: 72.0,
						daily_will_it_rain: 0,
						daily_chance_of_rain: "0",
						daily_will_it_snow: 0,
						daily_chance_of_snow: "0",
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
							code: 1006,
						},
						uv: 11.0,
					},
					astro: {
						sunrise: "06:33 AM",
						sunset: "08:22 PM",
						moonrise: "06:02 AM",
						moonset: "07:35 PM",
					},
				},
				{
					date: "2020-05-22",
					date_epoch: 1590105600,
					day: {
						maxtemp_c: 33.1,
						maxtemp_f: 91.6,
						mintemp_c: 23.9,
						mintemp_f: 75.0,
						avgtemp_c: 27.7,
						avgtemp_f: 81.9,
						maxwind_mph: 14.3,
						maxwind_kph: 23.0,
						totalprecip_mm: 1.7,
						totalprecip_in: 0.07,
						avgvis_km: 9.5,
						avgvis_miles: 5.0,
						avghumidity: 73.0,
						daily_will_it_rain: 1,
						daily_chance_of_rain: "88",
						daily_will_it_snow: 0,
						daily_chance_of_snow: "0",
						condition: {
							text: "Light rain shower",
							icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
							code: 1240,
						},
						uv: 11.0,
					},
					astro: {
						sunrise: "06:33 AM",
						sunset: "08:23 PM",
						moonrise: "06:37 AM",
						moonset: "08:31 PM",
					},
				},
			],
		},
		alert: {},
	};

	addCityWather(simualtedAjaxResponse);

	// call addCityWather with response object
}

function addCityWather(response) {}

// On Document Ready
$(document).ready(function () {
	// TODO: load vars from local storage
	// add actions to buttons
	// visualize elements
});

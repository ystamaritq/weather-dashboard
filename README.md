### Table of Contents

- [Concept](#concept)
- [User Stories](#user-stories)
- [Acceptance Criteria](#acceptance-criteria)
- [Installing / Getting Started](#inslalling-/-getting-started)
- [Demo](#demo)
- [Features](#features)

---

# Weather Dashboard

`
This project hosts the source code for a Weather Dashboard. Display the weather of the city select by the user and the forecast days weather condition.

`

---

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

```

---

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

---

## Installing / Getting Started

To test this project, simply clone project into a your local file system and open `index.html` in your favorite browser.

```
git clone https://github.com/ystamaritq/weather-dashboard.git
cd weather-dashboard
open index.html

```

---

### Initial Configuration

No additional setup required.

## Developing

Below is a summary of the key files for this project and their purpose:

- **index.html** weather dashboard html page
- **assets** folder that contains all files
- **assets/js/script.js** javascript files
- **assets/imgs/..** images used by the page
- **assets/css/style.css** main site custom stylesheet

## Additional Libraries:

- **Bootstrap**

### The following gif demonstrates the application functionality:

![weather](./assets/imgs/weather.gif)

## Features

In this weather dashboard once you click the search button you will have to enter a valid city name. And then you will be presented with all the weather information about the city.

## Licensing

"The code in this project is licensed under MIT license."

---

**developed with love by **@ystamaritq\*\*\*\*

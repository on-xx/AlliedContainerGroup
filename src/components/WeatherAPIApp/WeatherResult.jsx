import React from "react";

const WeatherResult = ({ weatherData }) => {
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  return (
    <div className="weather-results">
      <h2 className="location">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div className="temperature-info">
        <p className="temperature">
          Temperature: <span>{kelvinToCelsius(weatherData.main.temp)} °C</span>
        </p>
        <p className="feels-like">
          Feels Like:{" "}
          <span>{kelvinToCelsius(weatherData.main.feels_like)} °C</span>
        </p>
      </div>
      <div className="additional-info">
        <p>
          Humidity: <span>{weatherData.main.humidity}%</span>
        </p>
        <p>
          Pressure: <span>{weatherData.main.pressure} hPa</span>
        </p>
        <p>
          Weather: <span>{weatherData.weather[0].description}</span>
        </p>
        <p>
          Wind Speed: <span>{weatherData.wind.speed} m/s</span>
        </p>
        <p>
          Visibility: <span>{weatherData.visibility / 1000} km</span>
        </p>
        <p>
          Coordinates:{" "}
          <span>
            {weatherData.coord.lat}, {weatherData.coord.lon}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherResult;

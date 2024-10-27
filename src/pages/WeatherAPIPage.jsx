import React, { useState } from "react";
import axios from "axios";
import WeatherResult from "../components/WeatherAPIApp/WeatherResult";
import WeatherForm from "../components/WeatherAPIApp/WeatherForm";

const WeatherAPIPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "4f67872133c0ff12e5bf3b6ce49bd9b0";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
        },
      });
      console.log(res.data);
      setWeatherData(res.data);
    } catch (error) {
      setError("Error - Cannot fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setCity("");
  };

  return (
    <div id="weatherAPIPage">
      <div className="weatherAPIPage container">
        <WeatherForm
          city={city}
          setCity={setCity}
          handleSubmit={handleSubmit}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && <WeatherResult weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default WeatherAPIPage;

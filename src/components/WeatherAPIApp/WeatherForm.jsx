import React from "react";

const WeatherForm = ({ city, setCity, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="weather-form-input"
      />
      <button
        type="submit"
        className="weather-form-btn"
        disabled={!city.trim()}
      >
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;

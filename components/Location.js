const { getWeatherIcon } = require("./WeatherCard");
import React from "react";

function Location({ data, location }) {
  const locationData = data.find((city) => city.city === location);
  if (!locationData) return <p>Location not found</p>;
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={getWeatherIcon(locationData.forecast)}
          alt="Weather icon"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{locationData.city}</h3>
        <h5 className="card-text">{locationData.temperature}°C</h5>
        <h5 className="card-text">{locationData.forecast}</h5>
      </div>
    </div>
  );
}

export default Location;

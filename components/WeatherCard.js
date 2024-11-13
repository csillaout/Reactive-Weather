import React from "react";
import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/partlyCloudy.svg";
import rainy from "../assets/Rainy.svg";

function getWeatherIcon(forecast) {
  switch (forecast) {
    case "Sunny":
      return sunny;
    case "Rainy":
      return rainy;
    case "Cloudy":
      return cloudy;
    case "PartlyCloudy":
      return partlyCloudy;
  }
}

function WeatherCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={getWeatherIcon(props.data.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{props.data.city}</h3>
        <h5 className="card-text">{props.data.temperature}</h5>
        <h5 className="card-text">{props.data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = { WeatherCard, getWeatherIcon };

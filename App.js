import React from "react";
// Import data and WeatherCard here
const cities = require("./data");
const { WeatherCard } = require("./components/WeatherCard");
import { useState } from "react";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("Madrid");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Location data={cities} location={location} setLocation={setLocation} />
      <div className="app">
        {cities.map((city, index) => (
          <WeatherCard key={index} data={city} />
        ))}
      </div>
    </>
  );
}

export default App;

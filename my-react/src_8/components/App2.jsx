import React, {useEffect, useState} from "react";
import { Weather } from "./Weather"
import {WeatherContext} from "./WeatherContext";

export function App2() {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setWeather((prevWeatherObject) => {
        return {
          ...prevWeatherObject,
          Berlin: "rainy"
        }
      });
    },500)

    setTimeout(() => {
      setWeather((prevWeatherObject) => {
        return {
          ...prevWeatherObject,
          London: "sunny"
        }
      });
    },1000)

    setTimeout(() => {
      setWeather((prevWeatherObject) => {
        return {
          ...prevWeatherObject,
          Stuttgart: "hot and cold"
        }
      });
    },1500)
  },[])

  return (
    <div>
      <h1>Weather:</h1>

      <WeatherContext.Provider value={weather}>
        <Weather city="Stuttgart" />
        <Weather city="London" />
        <Weather city="Berlin" />
      </WeatherContext.Provider>
    </div>
  );
}

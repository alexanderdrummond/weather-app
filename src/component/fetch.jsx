import React, { useEffect, useState } from "react";

export const Fetching = () => {
  
    const [weather, setWeather] = useState([])

    const fetchWeatherData = () => {
      fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=3")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setWeather(data)
        })
    }
  
    useEffect(() => {
      fetchWeatherData()
    }, [])
    console.log("Weather", weather)
    
    return (
      <div>
        Test
      </div>
    );
  
};

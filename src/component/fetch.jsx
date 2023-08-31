import React, { useEffect, useState } from "react";

export const Fetching = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = () => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=3")
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!weather) {
    return <p>Loading...</p>;
  }

  const sunriseTime = weather.daily.sunrise[1]; // You might want to perform additional checks here

  return (
    <div>
      <p>Sunrise: {sunriseTime}</p>
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const Fetching = () => {
  const [weather, setWeather] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const fetchWeatherData = () => {
    if (userLocation) {
      const { latitude, longitude } = userLocation;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max&timezone=Europe%2FBerlin&forecast_days=14`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          console.log("Weather Data:", data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        console.log("Location:", { latitude, longitude });
      },
      (error) => {
        console.error("Error getting  location:", error);
      }
    );
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [userLocation]);

  return (
    <div>
      {weather ? (
        <div>
          {/* Render weather data here */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

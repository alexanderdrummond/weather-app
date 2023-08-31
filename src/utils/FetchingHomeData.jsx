import React, { useEffect, useState } from 'react';

export function WeatherData() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    fetchWeatherData(latitude, longitude);
    fetchCityName(latitude, longitude);
  };

  const fetchCityName = (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.address.city;
        console.log('City Name:', cityName);
      })
      .catch((error) => {
        console.error('Error fetching city name:', error);
      });
  }

  const fetchWeatherData = (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=Europe%2FBerlin`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    console.log("Weather:", weather);
  }, [weather]);

  const error = () => {
    console.log('Unable to retrieve your location');
  };

  

  return (
    <></>
  );
}

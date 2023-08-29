import { useEffect, useState } from "react";

export function Fetching() {
  const [weather, setWeather] = useState([]);

  function getWeather() {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=3";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }

  useEffect(() => {
    getWeather;
  }, []);
  console.log("Weather", weather);
}

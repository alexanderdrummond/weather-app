import { useEffect, useState } from "react";

export function Geolocation() {
    const [geolocation, setGeolocation] = useState([]);
  
    function getGeolocation() {
      const url =
        "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json";
      fetch(url)
        .then((res) => res.json())
        .then((data) => setGeolocation(data));
    }
  
    useEffect(() => {
        getGeolocation;
    }, []);
    console.log("Geolocation", geolocation);
  }
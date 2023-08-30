import { useEffect, useState } from "react";

export const Geolocation = () => {

const [city, setCity] = useState("");

  function success(pos) {
    let crd = pos.coords;
    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);

    // API request
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${crd.latitude}&lon=${crd.longitude}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.address && data.address.city) {
          const cityName = data.address.city;
          console.log("City Name (Browser Geolocation):", cityName);
          setCity(cityName);
        } else {
          getCityFromIP();
        }
      })
      .catch(error => {
        console.error("Error fetching city name:", error);
        getCityFromIP();
      });
  }

  function getCityFromIP() {

    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        if (data.city) {
          const cityName = data.city;
          console.log("City Name (IP Geolocation):", cityName); 
          setCity(cityName);
        } else {
          console.error("City name not found in IP geolocation response");
        }
      })
      .catch(error => {
        console.error("Error fetching city name from IP:", error);
      });
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          // console.log(result);
          if (result.state === "granted") {

            navigator.geolocation.getCurrentPosition(success, errors);
          } else if (result.state === "prompt") {

            navigator.geolocation.getCurrentPosition(success, errors);
          } else if (result.state === "denied") {

            getCityFromIP();
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");

      getCityFromIP();
    }
  }, []);

  return (
    <div>
      Location: {city} 
    </div>
  );
};



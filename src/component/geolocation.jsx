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
          console.log("City Name (Browser Geolocation):", cityName); // Log city name
          setCity(cityName);
        } else {
          // Fallback to IP geolocation if city name not found
          getCityFromIP();
        }
      })
      .catch(error => {
        console.error("Error fetching city name:", error);
        // Fallback to IP geolocation in case of an error
        getCityFromIP();
      });
  }

  function getCityFromIP() {
    // Make an API request to IP geolocation service
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        if (data.city) {
          const cityName = data.city;
          console.log("City Name (IP Geolocation):", cityName); // Log city name
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
          console.log(result);
          if (result.state === "granted") {
            // If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors);
          } else if (result.state === "prompt") {
            // If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors);
          } else if (result.state === "denied") {
            // If denied then you have to show instructions to enable location
            // Fallback to IP geolocation
            getCityFromIP();
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
      // Fallback to IP geolocation
      getCityFromIP();
    }
  }, []);

  return (
    <div>
      Geolocation: {city} {/* Display the city name */}
    </div>
  );
};



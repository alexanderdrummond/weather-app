const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const GOOGLE_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

// Tager lat og longitude fra geocoding funktionen og fetcher vejret fra Open Meteo, returnerer som json/null baseret på status af fetch

export const getWeatherByCoordinates = async (latitude, longitude) => {
  const apiUrl = `${API_BASE_URL}?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset,weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max&timezone=Europe%2FLondon&forecast_days=8`;
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    console.error(`API responded with status ${response.status}`);
    throw new Error('Failed to fetch weather data.');
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Bruger Google's geocoding API til at konvertere placeName til lat og longitude, derefter bruger den getWeatherByCoordinates til at fetche med koordinaterne

export const getWeatherByPlace = async (placeName) => {
  try {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${placeName}&key=${GOOGLE_API_KEY}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    
    if (geocodeData.results && geocodeData.results.length > 0) {
      const latitude = geocodeData.results[0].geometry.location.lat;
      const longitude = geocodeData.results[0].geometry.location.lng;
      return getWeatherByCoordinates(latitude, longitude);
    } else {
      console.error('No results found');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
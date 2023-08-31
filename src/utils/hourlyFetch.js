export async function getWeatherData() {
  const position = await getCurrentPosition();
  const weatherData = await fetchWeatherData(position.latitude, position.longitude);
  const cityName = await fetchCityName(position.latitude, position.longitude);

  return { position, weatherData, cityName };
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
        (error) => {
          console.log('Unable to retrieve your location');
          reject(error);
        }
      );
    } else {
      console.log('Geolocation not supported');
      reject(new Error('Geolocation not supported'));
    }
  });
}

async function fetchCityName(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const cityName = data.address.city;
    console.log('City Name:', cityName);
    return cityName;
  } catch (error) {
    console.error('Error fetching city name:', error);
    return null;
  }
}

async function fetchWeatherData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=Europe%2FBerlin`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

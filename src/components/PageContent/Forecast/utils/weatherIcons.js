import weatherCodeToIcon from './weathercodes.json';

export const getWeatherIconURLByCode = (code) => {
    const iconFilename = weatherCodeToIcon[code];
    const iconURL = iconFilename ? `https://openweathermap.org/img/wn/${iconFilename}` : null;
    console.log(`Generated icon URL for code ${code}: ${iconURL}`);
    return iconURL;
  };
  
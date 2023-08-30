import { Box } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { getPlaceSuggestions } from '../../../utils/googleservices';
import { getWeatherDataByPlaceName } from '../../../utils/openmeteoservices';
import WeatherCard from './atoms/WeatherCard';

const ForecastContent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);

  
// Tager en dateString og konverterer den til et date objekt, som så finder dagen af ugen f.eks. mandag

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
  };

  // Tager et placeName og bruger bruger getWeatherDataByPlaceName fra utility funktionen og opdaterer weatherData staten og til sidst sætter den.

  const handlePlaceClick = async (placeName) => {
    setSearchInput(placeName);
    setSuggestions([]);  
    const data = await getWeatherDataByPlaceName(placeName);
    if (data) {
      setWeatherData(data.daily);
      
    }
  };

  // Registrerer et event objekt og tjekker efter enter tryk og caller handlePlaceClick med det nuværende searchInput

  const handleEnterPress = async (e) => {
    if (e.key === 'Enter') {
      handlePlaceClick(searchInput);
    }
  };


// Sætter default placeClick til Aalborg og tilføjer/fjerner keydown eventlisteners 

  useEffect(() => {
    handlePlaceClick('Aalborg');
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleEnterPress);
    return () => {
      window.removeEventListener('keydown', handleEnterPress);
    };
  }, [searchInput]);

// Tager input og opdaterer searchInput staten og fetcher samtidigt place suggestions og opdaterer så "suggestions"

  const handleInputChange = async (input) => {
    setSearchInput(input);
    if (input) {
      const newSuggestions = await getPlaceSuggestions(input);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Registrerer klik udenfor suggestions boksen og sætter suggestions til et empty array samt skjuler boksen

  const handleOutsideClick = (e) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  

  return (
    <Box>
    <WeatherCard
        weatherData={weatherData}
        getDayOfWeek={getDayOfWeek}
        searchInput={searchInput}
        suggestions={suggestions}
        suggestionsRef={suggestionsRef}
        handleInputChange={handleInputChange}
        handlePlaceClick={handlePlaceClick}
      />
    </Box>
  );
};

export default ForecastContent;

import { Box, Text, Flex, SimpleGrid, Spacer, VStack, Grid, Divider } from '@chakra-ui/react';
import InputField from './InputField';
import { mapCode } from '../../../../utils/weatherUtils'; 
import { motion } from 'framer-motion';


const WeatherCard = ({ weatherData, getDayAndDate, searchInput, suggestions, suggestionsRef, handleInputChange, handlePlaceClick }) => {

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const getTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };


  return (
    <Flex justifyContent="center">
      <Box width={["90%", "90%", "80%"]} textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">
        <Box display="flex" flexDirection="column" alignItems="center">
          <InputField
            searchInput={searchInput}
            suggestions={suggestions}
            suggestionsRef={suggestionsRef}
            handleInputChange={handleInputChange}
            handlePlaceClick={handlePlaceClick}
          />
          <Text display="flex" alignItems="center" textAlign="Center" fontSize="lg" fontWeight="bold" mb="7">Displaying 12-day forecast for {searchInput}</Text>
          <SimpleGrid columns={[1, null, 4]} spacing={4} justifyContent="center">
          {weatherData &&
        weatherData.time.map((dateString, index) => {
          const dayOfWeek = getDayAndDate(dateString);
          const formattedDate = formatDate(dateString); 
          const weatherCode = weatherData.weathercode[index];
          const { icon, description } = mapCode(weatherCode);
          return (
            <motion.div 
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}>
                  <Box
                    key={index}
                    bg="rgba(255, 255, 255, 0.1)"
                    borderColor="rgba(255, 255, 255, 0.18)"
                    p={4}
                    borderRadius="10px"
                    mb={4}
                    width={["290px", "80%", "300px"]}
                    textAlign="center"
                    color="white"
                    boxShadow="0px 8px 32px rgba(31, 38, 135, 0.37)"
                    
                    border="1px solid rgba(255, 255, 255, 0.18)"
                  >
                    <Flex direction="column" h="100%" justify="space-between">
                    <Flex alignItems="center">
                      <VStack align="flex-start" spacing={1}>
                      <Text fontSize="xl">{dayOfWeek}</Text>
                        <Text fontSize="md">{formattedDate}</Text>
                      </VStack>
                      <Spacer />
                      <VStack align="flex-end" spacing={1}>
                        <img src={icon} alt={description} width="24" />
                        <Text fontSize="md">{description}</Text>
                      </VStack>
                    </Flex>
                    <Divider my={4} borderColor="white" />
                      <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
                        <Flex flexDirection="column" alignItems="center">
                          <img src="/sunrise.svg" alt="Wind Icon" width="24" />
                          <Text mt={2}>{getTime(weatherData.sunrise[index])}</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                          <img src="/tempplus.svg" alt="Wind Icon" width="24" />
                          <Text mt={2}>{Math.round(weatherData.temperature_2m_max[index])} °C</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                          <img src="/wind.svg" alt="Wind Icon" width="24" />
                          <Text mt={2}>{Math.round(weatherData.windspeed_10m_max[index])} m/s</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                          <img src="/sunset.svg" alt="Wind Icon" width="24" />
                          <Text mt={2}>{getTime(weatherData.sunset[index])}</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                          <img src="/tempminus.svg" alt="Wind Icon" width="24" />
                          <Text mt={2}>{Math.round(weatherData.temperature_2m_min[index])} °C</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems="center">
                          <img src="/rain.svg" alt="Precipitation Icon" width="24" />
                          <Text mt={2}>{weatherData.precipitation_probability_max[index]}%</Text>
                        </Flex>
                      </Grid>
                    </Flex>
                  </Box>
                  </motion.div>
                );
              })}
          </SimpleGrid>
        </Box>
        
      </Box>
    </Flex>
  );
};

export default WeatherCard;

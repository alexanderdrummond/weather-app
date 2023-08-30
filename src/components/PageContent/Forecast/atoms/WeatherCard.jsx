import { Box, Text, Flex, SimpleGrid, VStack, Grid, Spacer, Divider } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const WeatherCard = ({ weatherData, getDayOfWeek, searchInput, suggestions, suggestionsRef, handleInputChange, handlePlaceClick, }) => {

  return (
    
<Flex justifyContent="center">
    <Box width="80%" textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">
    <Box display="flex" flexDirection="column" alignItems="center">
      <InputGroup w="80%" position="relative" mt={10} mb={14}>
        <Input
          type="text"
          width="100%"
          placeholder="Search location"
          value={searchInput}
          color="white"
          onChange={(e) => handleInputChange(e.target.value)}
          borderRadius="md"
          borderColor="gray.300"
          _focus={{ 
            borderColor: 'transparent',
            backgroundImage: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
            backgroundClip: 'padding-box',
            boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.2)'
          }}
        />
        <InputRightElement>
          <SearchIcon color="white" />
        </InputRightElement>
        {suggestions.length > 0 && (
          <Box
            ref={suggestionsRef}
            position="absolute"
            top="100%"
            left="0"
            right="0"
            
            bg="white"
            boxShadow="md"
            mt="2"
            p="2"
            borderRadius="md"
            border="1px solid #E2E8F0"
          >
            {suggestions.slice(0, 2).map((suggestion) => (
              <Box
                key={suggestion.place_id}
                onClick={() => handlePlaceClick(suggestion.description)}
                display="flex"
                alignItems="center"
                py="1"
                cursor="pointer"
                _hover={{ bg: 'gray.100' }}
                color="black"
              >
                <Box mr="2">
                  <FiMapPin size={16} color="gray.400" />
                </Box>
                {suggestion.description}
              </Box>
            ))}
          </Box>
        )}
      </InputGroup>
      <Text fontSize="lg" fontWeight="bold" mb="5">Displaying 12-day forecast for {searchInput}</Text>
      <SimpleGrid columns={[2, null, 4]} spacing={4} justifyContent="center">
            {weatherData &&
              weatherData.time.map((day, index) => (
                <Box
                  key={index}
                  bg="rgba(255, 255, 255, 0.1)"
                  borderColor="rgba(255, 255, 255, 0.18)"
                  p={4}
                  borderRadius="10px"
                  mb={4}
                  width={["100%", "auto", "300px"]}
                  textAlign="center"
                  color="white"
                  boxShadow="0px 8px 32px rgba(31, 38, 135, 0.37)"
                  backdropFilter="blur(13.5px)"
                  border="1px solid rgba(255, 255, 255, 0.18)"
                >
                  <Flex direction="column" h="100%" justify="space-between">
                    <Flex alignItems="flex-start">
                      <VStack align="flex-start">
                        <Text fontSize="xl">{getDayOfWeek(day)}</Text>
                        <Text fontSize="md">{day}</Text>
                      </VStack>
                      <Spacer />
                      <VStack align="flex-end">
                        <img src="/sunny.svg" alt="Sunny Icon" width="16" />
                        <Text fontSize="sm">{weatherData.temperature_2m_max[index]}° / {weatherData.temperature_2m_min[index]}°</Text>
                      </VStack>
                    </Flex>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                      <Flex flexDirection="column" alignItems="center">
                        <img src="/wind.svg" alt="Wind Icon" width="16" />
                        <Text mt={2}>{weatherData.windspeed_10m_max[index]} m/s</Text>
                      </Flex>
                      <Flex flexDirection="column" alignItems="center">
                        <img src="/wind.svg" alt="Wind Icon" width="16" />
                        <Text mt={2}>{weatherData.windspeed_10m_max[index]} m/s</Text>
                      </Flex>
                      <Flex flexDirection="column" alignItems="center">
                        <img src="/humidity.svg" alt="Humidity Icon" width="16" />
                        <Text mt={2}>x</Text>
                      </Flex>
                      <Flex flexDirection="column" alignItems="center">
                        <img src="/rain.svg" alt="Precipitation Icon" width="16" />
                        <Text mt={2}>{weatherData.precipitation_probability_max[index]}</Text>
                      </Flex>
                    </Grid>
                  </Flex>
                </Box>
              ))}
          </SimpleGrid>
    </Box>
    </Box>
    </Flex>
  );
};

export default WeatherCard;

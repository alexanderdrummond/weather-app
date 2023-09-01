import { Text, Heading, Box, Image, Flex, Skeleton } from '@chakra-ui/react';
import { mapCode } from '../../../../utils/weatherUtils';

export function HomeSlider({ weatherInfo, isLoading }) {
    const { weatherData } = weatherInfo;

    const d = new Date();
    let currentTimeIndex = d.getHours();

    const { icon: weatherIcon, description: weatherDescription } = mapCode(weatherData?.hourly.weathercode[currentTimeIndex])

    const currentHour = new Date().getHours();

    return (
        <Flex overflow='scroll' boxSizing='border-box' width="100%" textColor="white" mb='16px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
            {isLoading ? (
               
                Array.from({ length: 25 }).map((_, index) => (
                    <Flex key={index} flexDir='column' alignItems='center' gap='6px'>
                        <Skeleton height='20px' width='40px' />
                        <Skeleton height='30px' width='30px' />
                        <Skeleton height='20px' width='40px' />
                    </Flex>
                ))
            ) : (
               
                weatherData?.hourly.temperature_2m.slice(currentHour, currentHour + 25).map((temperature, index) => {
                    const weatherCode = weatherData?.hourly.weathercode[index];
                    const { icon: weatherIcon } = mapCode(weatherCode);
                    const displayHour = (currentHour + index) % 24;
                    return (
                        <Flex key={index} flexDir='column' alignItems='center' gap='6px'>
                            <Text>{displayHour}:00</Text>
                            <Image src={weatherIcon} height='30px' alt='weather icon' />
                            <Text>{Math.round(temperature)}°</Text>
                        </Flex>
                    );
                })
            )}
        </Flex>
    );
}

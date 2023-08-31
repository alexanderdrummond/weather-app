import { Text, Heading, Box, Image, Flex } from '@chakra-ui/react';
import { mapCode } from '../../../../utils/weatherUtils';

export function HomeSlider({ weatherInfo, isLoading }) {

    const { weatherData, cityName } = weatherInfo;

    const d = new Date();
    let currentTimeIndex = d.getHours();
    
    const { icon: weatherIcon, description: weatherDescription } = mapCode(weatherData?.hourly.weathercode[currentTimeIndex])


    return (
        <Flex overflow='scroll' boxSizing='border-box' width="100%" textColor="white" mb='16px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src={weatherIcon} height='30px' alt={weatherDescription} />
                <Text>{Math.round(weatherData?.hourly.temperature_2m[0])}°</Text>
            </Flex>
        </Flex>
    )
}
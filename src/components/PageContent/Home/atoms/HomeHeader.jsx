import { Text, Heading, Box, Image, Flex, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';
import { mapCode } from '../../../../utils/weatherUtils';

export function HomeHeader({ weatherInfo, isLoading }) {
    const { weatherData, cityName } = weatherInfo;
    const { icon: weatherIcon, description: weatherDescription } = mapCode(weatherData?.hourly.weathercode[0]);

    const d = new Date();
    let currentTimeIndex = d.getHours();

    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton height="40px" width="200px" mb="10px" />
                    <Skeleton height="60px" width="60px" mb="6px" />
                    <Skeleton height="20px" width="100px" mb="16px" />
                    <Flex justifyContent="space-between" flexDirection="row" gap="6px">
                        <Skeleton height="26px" width="50px" />
                        <Skeleton height="26px" width="50px" />
                        <Skeleton height="26px" width="50px" />
                    </Flex>
                </>
            ) : (
                <>
                    <Heading mb='10px' fontSize='44' fontWeight='500'>{cityName}</Heading>
                    <Flex justifyContent='space-between' alignItems='center' mb='6px'>
                        <Box>
                            <Text fontSize='54px' display='inline' mr='10px'>{Math.round(weatherData?.hourly.temperature_2m[currentTimeIndex])}°</Text>
                            <Text fontSize='20px' display='inline'>{weatherDescription}</Text>
                        </Box>
                        <Image src={weatherIcon} h='60px' alt={weatherDescription} />
                    </Flex>
                    <Text mb='16px' fontSize='20px'>{Math.round(weatherData?.daily.temperature_2m_max[0])}° / {Math.round(weatherData?.daily.temperature_2m_min[0])}°</Text>
                    <Flex justifyContent='space-between' flexDirection='row' gap='6px' mb='16px'>
                        <Flex alignItems='center' gap='10px'>
                            <Image src='/wind.svg' h='26px' alt='wind' />
                            <Text>{Math.round(weatherData?.hourly.windspeed_10m[currentTimeIndex])} km/h</Text>
                        </Flex>
                        <Flex alignItems='center' gap='10px'>
                            <Image src='/rain.svg' h='26px' alt='rain' />
                            <Text>{Math.round(weatherData?.hourly.precipitation[currentTimeIndex])} mm</Text>
                        </Flex>
                        <Flex alignItems='center' gap='10px'>
                            <Image src='/humidity.svg' h='26px' alt='humidity' />
                            <Text>{Math.round(weatherData?.hourly.relativehumidity_2m[currentTimeIndex])} %</Text>
                        </Flex>
                    </Flex>
                </>
            )}
        </>
    );
}

import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { HomeHeader } from "./atoms/HomeHeader"
import { HomeSlider } from './atoms/HomeSlider';
import { HomeFacts } from './atoms/HomeFacts';
import { motion } from 'framer-motion';
import { getWeatherData } from '../../../utils/hourlyFetch';

function HomeContent() {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                console.log('Fetching data...');
                const data = await getWeatherData();
                console.log('Fetched data:', data);
                setWeatherInfo(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }
        
    
        fetchData();
    }, []);
    

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Flex justifyContent="center">
                <Box width="80%" textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">
                    <HomeHeader weatherInfo={weatherInfo} isLoading={isLoading} />
                    <HomeSlider weatherInfo={weatherInfo} isLoading={isLoading} />
                    <HomeFacts weatherInfo={weatherInfo} isLoading={isLoading} />
                </Box>
            </Flex>
        </motion.div>
    )
}

export default HomeContent;

import { Box, Flex } from '@chakra-ui/react';
import { HomeHeader } from "./atoms/HomeHeader"
import { HomeSlider } from './atoms/HomeSlider';
import { HomeFacts } from './atoms/HomeFacts';

function HomeContent() {


    return (
        <Flex justifyContent="center">
            <Box width="80%" textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">
                <HomeHeader />
                <HomeSlider />
                <HomeFacts />
            </Box>
        </Flex>
    )
}

export default HomeContent
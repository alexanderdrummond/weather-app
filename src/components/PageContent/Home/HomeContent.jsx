import { Box, Flex } from '@chakra-ui/react';
import { HomeHeader } from "./atoms/HomeHeader"
import { HomeSlider } from './atoms/HomeSlider';
import { HomeFacts } from './atoms/HomeFacts';
import { motion } from 'framer-motion';

function HomeContent() {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Flex justifyContent="center">
                <Box width="80%" textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">
                    <HomeHeader />
                    <HomeSlider />
                    <HomeFacts />
                </Box>
            </Flex>
        </motion.div>
    )
}

export default HomeContent
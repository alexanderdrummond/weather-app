import { Text, Heading, Box, Image, Flex } from '@chakra-ui/react';
// import rainImg from '../../images/rain.jpg'

function HomeContent() {


    return (

        <Flex justifyContent="center">
            <Box width="80%" textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">
                <Heading mb='30px' fontSize='30px'>Aalborg (current location)</Heading>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Text fontSize='54px' display='inline' mr='10px'>16°</Text>
                        <Text fontSize='20px' display='inline'>Partly cloudy</Text>
                    </Box>
                    {/* <Image src={rainImg} h='70px' /> */}
                </Flex>
                <Text>17° / 10°</Text>
            </Box>
        </Flex>
    )
}

export default HomeContent
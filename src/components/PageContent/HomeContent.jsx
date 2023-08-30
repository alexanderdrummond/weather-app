import { Text, Heading, Box, Image, Flex } from '@chakra-ui/react';
// import rainImg from '../../images/rain.jpg'

function HomeContent() {


    return (

        <Box p={'20px'} m={'30px'} bgColor={'gray'} borderRadius={'20px'}>
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

    )
}

export default HomeContent
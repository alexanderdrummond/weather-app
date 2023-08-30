import { Text, Heading, Box, Image, Flex } from '@chakra-ui/react';

export function HomeHeader() {
    return (
        <>
            <Heading mb='30px' fontSize='30px'>Aalborg (current location)</Heading>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box>
                    <Text fontSize='54px' display='inline' mr='10px'>16°</Text>
                    <Text fontSize='20px' display='inline'>Partly cloudy</Text>
                </Box>
                <Image src='/rain.svg' h='80px' />
            </Flex>
            <Text mb='6px' fontSize='20px'>17° / 10°</Text>
            <Flex justifyContent='space-between' flexDirection='row' gap='6px' mt={4} mb={4}>
                <Flex alignItems='center' gap='10px'>
                    <Image src='/wind.svg' h='26px' />
                    <Text>9.4 km/h</Text>
                </Flex>
                <Flex alignItems='center' gap='10px'>
                    <Image src='/rain.svg' h='26px' />
                    <Text>0.3 mm</Text>
                </Flex>
                <Flex alignItems='center' gap='10px'>
                    <Image src='/humidity.svg' h='26px' />
                    <Text>10 %</Text>
                </Flex>
            </Flex>
        </>
    )
}
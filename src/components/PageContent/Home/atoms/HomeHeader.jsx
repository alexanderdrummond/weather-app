import { Text, Heading, Box, Image, Flex } from '@chakra-ui/react';

export function HomeHeader() {
    return (
        <>
            <Heading mb='10px' fontSize='44' fontWeight='500'>Aalborg</Heading>
            <Flex justifyContent='space-between' alignItems='center' mb='6px'>
                <Box>
                    <Text fontSize='54px' display='inline' mr='10px'>16°</Text>
                    <Text fontSize='20px' display='inline'>Partly cloudy</Text>
                </Box>
                <Image src='/rain.svg' h='60px' alt='rain' />
            </Flex>
            <Text mb='16px' fontSize='20px'>17° / 10°</Text>
            <Flex justifyContent='space-between' flexDirection='row' gap='6px' mb='16px'>
                <Flex alignItems='center' gap='10px'>
                    <Image src='/wind.svg' h='26px' alt='wind' />
                    <Text>9 km/h</Text>
                </Flex>
                <Flex alignItems='center' gap='10px'>
                    <Image src='/rain.svg' h='26px' alt='rain' />
                    <Text>0.3 mm</Text>
                </Flex>
                <Flex alignItems='center' gap='10px'>
                    <Image src='/humidity.svg' h='26px' alt='humidity' />
                    <Text>10 %</Text>
                </Flex>
            </Flex>
        </>
    )
}
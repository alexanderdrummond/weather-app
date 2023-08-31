import { Text, Heading, Box, Image, Flex } from '@chakra-ui/react';

export function HomeSlider() {
    return (
        <Flex overflow='scroll'boxSizing='border-box' width="100%" textColor="white" mb='16px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
            <Flex flexDir='column' alignItems='center' gap='6px'>
                <Text>Now</Text>
                <Image src='/rain.svg' height='30px'/>
                <Text>16°</Text>
            </Flex>
        </Flex>
    )
}
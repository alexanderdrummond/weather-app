import { Grid, GridItem, Box, Text, Image, Flex } from '@chakra-ui/react';

export function HomeFacts() {
    return (
        <>
            <Grid gridTemplateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Image src='/sunrise.svg'/>
                        <Text fontSize={18}>Sunrise</Text>
                    </Flex>
                    <Text textAlign='end' fontSize={24}>06.16</Text>
                </GridItem>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Image src='/sunset.svg'/>
                        <Text fontSize={18}>Sunset</Text>
                    </Flex>
                    <Text textAlign='end' fontSize={24}>20.23</Text>
                </GridItem>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Image src='/uv.svg'/>
                        <Text fontSize={18}>UV</Text>
                    </Flex>
                    <Text textAlign='end' fontSize={24}>3</Text>
                </GridItem>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Image src='/wind.svg'/>
                        <Text fontSize={18}>Max wind</Text>
                    </Flex>
                    <Text textAlign='end' fontSize={24}>13.2 km/h</Text>
                </GridItem>
            </Grid>
        </>
    )
}
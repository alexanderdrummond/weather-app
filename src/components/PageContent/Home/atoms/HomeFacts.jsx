import { Grid, GridItem, Box, Text, Image, Flex, useMediaQuery } from '@chakra-ui/react';

export function HomeFacts() {


    const [isDesktop] = useMediaQuery('(min-width: 1200px)')


    return (
        <>
            <Grid gridTemplateColumns={isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'} gap={4}>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Image src='/sunrise.svg' h='46px' />
                        <Flex flexDir='column'>
                            <Text textAlign='end' fontSize={18}>Sunrise</Text>
                            <Text textAlign='end' fontSize={24}>06.13</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Image src='/sunset.svg' h='46px' />
                        <Flex flexDir='column'>
                            <Text textAlign='end' fontSize={18}>Sunset</Text>
                            <Text textAlign='end' fontSize={24}>21.44</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex justifyContent='space-between' alignItems='center' height='100%'>
                        <Image src='/uv.svg' h='46px' />
                        <Flex flexDir='column' justifyContent='space-between' height='100%'>
                            <Text textAlign='end' fontSize={18}>UV</Text>
                            <Text textAlign='end' fontSize={24}>3</Text>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Image src='/wind.svg' h='46px' />
                        <Flex flexDir='column'>
                            <Text textAlign='end' fontSize={18}>Max wind</Text>
                            <Text textAlign='end' fontSize={24}>13.7 km/h</Text>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}
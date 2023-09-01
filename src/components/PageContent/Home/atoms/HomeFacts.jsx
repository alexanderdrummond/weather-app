import { Grid, GridItem, Box, Text, Image, Flex, Skeleton, useMediaQuery } from '@chakra-ui/react';

export function HomeFacts({ isLoading }) {
    const [isDesktop] = useMediaQuery('(min-width: 1200px)')

    return (
        <>
            <Grid gridTemplateColumns={isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'} gap={4}>
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <GridItem key={index} boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                            <Flex justifyContent='space-between' alignItems='center'>
                                <Skeleton height='46px' width='46px' />
                                <Flex flexDir='column'>
                                    <Skeleton height='18px' width='60px' />
                                    <Skeleton height='24px' width='60px' />
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))
                ) : (
                    <>
                        <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                            <Flex justifyContent='space-between' alignItems='center'>
                                <Image src='/sunrise.svg' h='46px' alt='sunrise' />
                                <Flex flexDir='column'>
                                    <Text textAlign='end' fontSize={18}>Sunrise</Text>
                                    <Text textAlign='end' fontSize={24}>06.13</Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                            <Flex justifyContent='space-between' alignItems='center'>
                                <Image src='/sunset.svg' h='46px' alt='sunset' />
                                <Flex flexDir='column'>
                                    <Text textAlign='end' fontSize={18}>Sunset</Text>
                                    <Text textAlign='end' fontSize={24}>21.44</Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                            <Flex justifyContent='space-between' alignItems='center' height='100%'>
                                <Image src='/uv.svg' h='46px' alt='uv' />
                                <Flex flexDir='column' justifyContent='space-between' height='100%'>
                                    <Text textAlign='end' fontSize={18}>UV</Text>
                                    <Text textAlign='end' fontSize={24}>3</Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem boxSizing='border-box' width="100%" textColor="white" m='0px 0px' p={3} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" border="1px solid rgba(255, 255, 255, 0.28)" gap='30px'>
                            <Flex justifyContent='space-between' alignItems='center'>
                                <Image src='/wind.svg' h='46px' alt='wind' />
                                <Flex flexDir='column'>
                                    <Text textAlign='end' fontSize={18}>Max wind</Text>
                                    <Text textAlign='end' fontSize={24}>13 km/h</Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                        
                    </>
                )}
            </Grid>
        </>
    )
}

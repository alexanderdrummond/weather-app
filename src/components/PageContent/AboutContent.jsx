import {
  Box, Text, Accordion, AccordionItem,
  Badge, AccordionButton, AccordionPanel, AccordionIcon, Flex, Link, VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons'




const AboutContent = () => {

  const team = [
    { name: 'Alex', task: '' },
    { name: 'Cæcilie', task: '' },
    { name: 'Katrine', task: '' },
    { name: 'Simon', task: '' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Flex justifyContent="center">
        <Box width="80%" textColor="white" mt={10} p={4} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="10px" backdropFilter="blur(13.5px)" border="1px solid rgba(255, 255, 255, 0.18)">

          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Technologies used
          </Text>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center">
                  <img src="/react.svg" alt="React" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  React
                  <Link href='https://react.dev/' isExternal display='flex' alignItems='center' justifyContent='center' ml='8px'>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Used for building the UI components and managing state.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center">
                  <img src="/googlemaps.svg" alt="Framer Motion" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Google Cloud API
                  <Link href='https://cloud.google.com/apis' isExternal display='flex' alignItems='center' justifyContent='center' ml='8px'>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Used for suggestions in searches and geocoding place name queries to coordinates.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center">
                  <img src="/framer.svg" alt="Framer Motion" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Framer Motion
                  <Link href='https://www.framer.com/motion/' isExternal display='flex' alignItems='center' justifyContent='center' ml='8px'>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Used for animations and page transitions.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center">
                  <img src="/chakra.svg" alt="Chakra UI" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Chakra UI
                  <Link href='https://chakra-ui.com/' isExternal display='flex' alignItems='center' justifyContent='center' ml='8px'>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Used for styling and layout.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center">
                  <img src="/openmeteo.svg" alt="OpenMeteo" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  OpenMeteo
                  <Link href='https://open-meteo.com/' isExternal display='flex' alignItems='center' justifyContent='center' ml='8px'>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Used for fetching weather data.</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center">
                  <img src="/openmeteo.svg" alt="OpenMeteo" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Icônes by Antfu
                  <Link href='https://icones.js.org/' isExternal display='flex' alignItems='center' justifyContent='center' ml='8px'>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>Used for icons.</AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Text fontSize="lg" fontWeight="semibold" mt={6} mb={2}>
            Team members
          </Text>
          <VStack alignItems='start'>
            {team.map((member, index) => (
              <Box key={index} mb={{ base: 4, md: 0 }} mr={{ md: index !== team.length - 1 ? 4 : 0 }}>
                <Text>{member.name}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default AboutContent;

import { Box, Text, Accordion, AccordionItem,
  Badge, AccordionButton, AccordionPanel, AccordionIcon, Flex } from '@chakra-ui/react';




const AboutContent = () => {

  const team = [
    { name: 'Alex', task: 'xyz' },
    { name: 'Cæcilie', task: 'xyz' },
    { name: 'Katrine', task: 'xyz' },
    { name: 'Simon', task: 'xyz' },
  ];

  return (
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
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Used for fetching weather data.</AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text fontSize="lg" fontWeight="semibold" mt={6} mb={2}>
        Team members
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} justify="start">
  {team.map((member, index) => (
    <Box key={index} mb={{ base: 4, md: 0 }} mr={{ md: index !== team.length - 1 ? 4 : 0 }}>
      <Text>{member.name}</Text>
      <Badge variant="subtle" colorScheme="green">
        {member.task}
      </Badge>
    </Box>
  ))}
</Flex>
    </Box>
    </Flex>
  );
};

export default AboutContent;
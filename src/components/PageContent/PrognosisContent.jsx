import { Box, Text, Divider, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const PrognosisContent = () => {
  const mockData = [
    {
      day: 'Day 1',
      weatherIcon: '🌞',
      temperature: '25°C',
      wind: '5km/h',
      humidity: '20%',
      reciprocation: '10%',
    },
    {
      day: 'Day 2',
      weatherIcon: '☁️',
      temperature: '22°C',
      wind: '3km/h',
      humidity: '22%',
      reciprocation: '10%',
    },
    {
      day: 'Day 3',
      weatherIcon: '🌦',
      temperature: '23°C',
      wind: '4km/h',
      humidity: '18%',
      reciprocation: '10%',

    },
  ];

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Prognosis
      </Text>
      <Divider mb={4} />
      <Tabs isFitted isLazy align="center">
        <TabList>
          <Tab>Cards</Tab>
          <Tab>Table</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {mockData.map((data, index) => (
              <Box key={index} bg="gray.200" p={4} borderRadius="md" mb={4} textAlign="center">
                <Text fontSize="xl">{data.day}</Text>
                <Text fontSize="4xl">{data.weatherIcon}</Text>
                <Text>{data.temperature}</Text>
                <Text>Wind: {data.wind}</Text>
                <Text>Humidity: {data.humidity}</Text>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            <Table variant="simple" size="md">
              <Thead>
                <Tr>
                  <Th>Day</Th>
                  <Th>Weather</Th>
                  <Th>Temperature</Th>
                  <Th>Wind</Th>
                  <Th>Humidity</Th>
                  <Th>Reciprocation</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mockData.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.day}</Td>
                    <Td>{data.weatherIcon}</Td>
                    <Td>{data.temperature}</Td>
                    <Td>{data.wind}</Td>
                    <Td>{data.humidity}</Td>
                    <Td>{data.reciprocation}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PrognosisContent;

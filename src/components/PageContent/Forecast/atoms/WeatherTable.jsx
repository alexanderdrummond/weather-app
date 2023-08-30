import { Box, Table, Tr, Td, Tfoot, Tbody, useMediaQuery } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';

const WeatherTable = ({ weatherData, getDayOfWeek }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const tableRef = useRef(null);
  const [showShadow, setShowShadow] = useState(false);

  const checkScroll = () => {
    if (tableRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = tableRef.current;
      setShowShadow(isMobile && (scrollWidth - scrollLeft !== clientWidth));
    }
  };

  useEffect(() => {
    checkScroll();
    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', checkScroll);
    }
    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener('scroll', checkScroll);
      }
    };
  }, [isMobile]);

  return (
    <Box position="relative" width="100%" borderRadius="md" overflow="hidden">
      <Box
        ref={tableRef}
        overflowX={{ base: 'scroll', md: 'initial' }}
        onScroll={checkScroll}
        pr={showShadow ? "4px" : "0"}
      >
        <Table variant="simple" size="md">
          <Tbody>
            <Tr bg="gray.700" textColor="white">
              <Td borderBottomColor="gray.300">Day</Td>
              <Td borderBottomColor="gray.300">Temperature</Td>
              <Td borderBottomColor="gray.300">Wind</Td>
              <Td borderBottomColor="gray.300">Humidity</Td>
              <Td borderBottomColor="gray.300">Precipitation</Td>
            </Tr>
            {weatherData.time.map((day, index) => (
              <Tr bg="gray.200" key={index}>
                <Td borderBottomColor="gray.300">{getDayOfWeek(day)}</Td>
                <Td borderBottomColor="gray.300">{`${weatherData.temperature_2m_max[index]} / ${weatherData.temperature_2m_min[index]}`}</Td>
                <Td borderBottomColor="gray.300">{weatherData.windspeed_10m_max[index]}</Td>
                <Td borderBottomColor="gray.300">x</Td>
                <Td borderBottomColor="gray.300">{weatherData.precipitation_probability_max[index]}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr bg="gray.700" textColor="white">
              <Td colSpan="5" textAlign="center"></Td>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
      {showShadow && (
        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          width="20px"
          boxShadow="lg"
          zIndex="1"
          background="linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent)"
        />
      )}
    </Box>
  );
};

export default WeatherTable;

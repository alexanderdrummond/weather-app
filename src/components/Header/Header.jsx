import { Box, Flex, Menu, MenuButton, Icon, Button, MenuList, MenuItem, Text, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon, InfoIcon, } from '@chakra-ui/icons';

const Header = ({ setCurrentPage, currentPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

// handler skift af side

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onClose();
  };

  return (
    <>
      <Box className="rainbow-gradient"></Box>
      <Box className="header-depth" bg="black" w="100%" p={4} color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="2xl">Weather App</Text>
          </Box>
          <Box>
            <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
              <MenuButton
                as={Button}
                p={2}
                borderRadius="md"
                color="black"
                border="white"
                bg="gray.100"
              >
                {currentPage} <ChevronDownIcon />
              </MenuButton>

              <MenuList p={0} bg="gray.100" color="black">
                <MenuItem py={2} onClick={() => handlePageChange('Home')} bg="gray.100" _hover={{ bg: 'gray.200' }}>
                  <Icon as={InfoIcon} mr={2} /> Home
                </MenuItem>
                
                <MenuItem py={2} onClick={() => handlePageChange('Forecast')} bg="gray.100" _hover={{ bg: 'gray.200' }}>
                  <Icon as={InfoIcon} mr={2} /> Forecast
                </MenuItem>
               
                <MenuItem py={2} onClick={() => handlePageChange('About')} bg="gray.100" _hover={{ bg: 'gray.200' }}>
                  <Icon as={InfoIcon} mr={2} /> About
                </MenuItem>
              </MenuList>

            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;

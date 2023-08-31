import { Box, Flex, Menu, MenuButton, Icon, Button, MenuList, MenuItem, useDisclosure, Text } from '@chakra-ui/react';
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
      <Box className="header-depth" bg="black" w="100%" p={4} color="white">
        <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Box ml="20px">
          <img src="/logo.svg" alt="Weather Logo" width="60px" />
          </Box>
          <Text ml="20px" fontSize="lg" fontFamily="Obadiah" display={{ base: 'none', md: 'block' }}>weatherShark</Text>
        </Flex>
          <Box>
            <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose} >
              <MenuButton
                as={Button}
                p={2}
                borderRadius="md"
                color="black"
                border="white"
                bg="gray.100"
                mr="20px"
              >
                {currentPage} <ChevronDownIcon />
              </MenuButton>

              <MenuList p={0} bg="gray.100" color="black">
                <MenuItem py={2} onClick={() => handlePageChange('Home')} bg="gray.100" _hover={{ bg: 'gray.200' }}>
                  <img src="/home.svg" width="20" /> <Text ml="8px">| Home</Text>
                </MenuItem>
                
                <MenuItem py={2} onClick={() => handlePageChange('Forecast')} bg="gray.100" _hover={{ bg: 'gray.200' }}>
                <img src="/calendar.svg" width="20" /> <Text ml="8px">| Forecast</Text>
                </MenuItem>
               
                <MenuItem py={2} onClick={() => handlePageChange('About')} bg="gray.100" _hover={{ bg: 'gray.200' }}>
                <img src="/info.svg" width="20" /> <Text ml="8px">| About</Text>
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

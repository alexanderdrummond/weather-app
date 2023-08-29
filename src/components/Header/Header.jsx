import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Text, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';

const Header = ({ setCurrentPage, currentPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onClose();
  };

  return (
    <Box bg="gray.700" w="100%" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="2xl">Weather App</Text>
        </Box>
        <Box>
          <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <MenuButton as="button" p={2} borderRadius="md" color="white">
              {currentPage} <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="gray.700" color="white">
              <MenuItem onClick={() => handlePageChange('Home')} bg="gray.700" _hover={{ bg: "gray.600" }}>Home</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => handlePageChange('Prognosis')} bg="gray.700" _hover={{ bg: "gray.600" }}>Prognosis</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => handlePageChange('About')} bg="gray.700" _hover={{ bg: "gray.600" }}>About</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
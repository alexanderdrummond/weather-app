import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const Header = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onClose();
  };

  return (
    <Box bg="blue.400" w="100%" p={4} color="white">
      <Flex justifyContent="space-between">
        <Box>
        </Box>
        <Box>
          <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <MenuButton as="button" rightIcon={<ChevronDownIcon />}>
              {currentPage}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handlePageChange("Home")}>Home</MenuItem>
              <MenuItem onClick={() => handlePageChange("Prognosis")}>Prognosis</MenuItem>
              <MenuItem onClick={() => handlePageChange("About")}>About</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
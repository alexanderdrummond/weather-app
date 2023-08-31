import { Box, InputGroup, Input, InputRightElement, keyframes } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FiMapPin } from 'react-icons/fi';
import './InputField.css'

const InputField = ({ searchInput, suggestions, suggestionsRef, handleInputChange, handlePlaceClick }) => {
  return (
    <InputGroup w="80%" position="relative" mt={10} mb={14}>
      <Input
        type="text"
        width="100%"
        placeholder="Search location"
        value={searchInput}
        color="white"
        onChange={(e) => handleInputChange(e.target.value)}
        borderRadius="md"
        borderColor="gray.300"
        focusBorderColor="rgba(116, 63, 155, 0.7)"
        className="input1"
      />
      <InputRightElement>
        <SearchIcon color="white" />
      </InputRightElement>
      {suggestions.length > 0 && (
        <Box
          ref={suggestionsRef}
          position="absolute"
          top="100%"
          left="0"
          right="0"
          bg="white"
          boxShadow="md"
          mt="2"
          p="2"
          borderRadius="md"
          border="1px solid #E2E8F0"
        >
          {suggestions.slice(0, 2).map((suggestion) => (
            <Box
              key={suggestion.place_id}
              onClick={() => handlePlaceClick(suggestion.description)}
              display="flex"
              alignItems="center"
              py="1"
              cursor="pointer"
              _hover={{ bg: 'gray.100' }}
              color="black"
            >
              <Box mr="2">
                <FiMapPin size={16} color="gray.400" />
              </Box>
              {suggestion.description}
            </Box>
          ))}
        </Box>
      )}
    </InputGroup>
  );
};

export default InputField;

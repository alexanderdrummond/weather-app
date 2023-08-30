import {
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FiMapPin } from 'react-icons/fi';

const ForecastHeader = ({
  searchInput,
  handleInputChange,
  suggestions,
  suggestionsRef,
  handlePlaceClick
  
}) => {
  return (
    <Box display="flex" justifyContent="center" p={4}>
      <InputGroup w={["calc(100% * 2 + 4px)", "auto", "calc(300px * 5 + 4 * 4px)"]} position="relative">
        <Input
          type="text"
          placeholder="Search location"
          value={searchInput}
          color="white"
          onChange={(e) => handleInputChange(e.target.value)}
          borderRadius="md"
          borderColor="gray.300"
          _focus={{ borderColor: 'gray.700' }}
        />
        <InputRightElement>
          <SearchIcon color="gray.500" />
        </InputRightElement>
        {suggestions.length > 0 && (
          <Box
            ref={suggestionsRef}
            position="absolute"
            top="100%"
            left="0"
            right="0"
            bg="white"
            zIndex="2"
            boxShadow="md"
            mt="2"
            p="2"
            borderRadius="md"
            border="1px solid #E2E8F0"
          >
            {suggestions.map((suggestion) => (
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
                <Text textColor="black">{suggestion.description}</Text>
              </Box>
            ))}
          </Box>
        )}
      </InputGroup>
    </Box>
  );
};

export default ForecastHeader;

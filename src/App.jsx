
import { ChakraProvider, CSSReset, Box, Text, VStack, Grid, theme } from '@chakra-ui/react';
import Header from './components/Header/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid minH="10vh">
          <Header />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
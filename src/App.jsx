
import { ChakraProvider, CSSReset, Box, Text, VStack, Grid, theme } from '@chakra-ui/react';
import Header from './components/Header/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <Header />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
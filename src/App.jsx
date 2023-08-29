import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { useState } from 'react';
import Header from './components/Header/Header';
import HomeContent from './components/PageContent/HomeContent';
import PrognosisContent from './components/PageContent/PrognosisContent';
import AboutContent from './components/PageContent/AboutContent';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid minH="7vh">
          <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </Grid>
        {currentPage === 'Home' && <HomeContent />}
        {currentPage === 'Prognosis' && <PrognosisContent />}
        {currentPage === 'About' && <AboutContent />}
      </Box>
    </ChakraProvider>
  );
}

export default App;
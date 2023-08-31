import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import './utils/fonts.css';
import Header from './components/Header/Header';
import HomeContent from './components/PageContent/Home/HomeContent';
import ForecastContent from './components/PageContent/Forecast/ForecastContent';
import AboutContent from './components/PageContent/AboutContent';
import LoadingScreen from './components/Header/LoadingScreen';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    {isLoading && <LoadingScreen />}
    <ChakraProvider theme={theme}>
      <Box
        bgImage="url('/bg.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        backdropFilter="blur(5px)"
        minH="100vh"
      >
        <Grid minH="7vh">
          <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </Grid>
        {currentPage === 'Home' && <HomeContent />}
        {currentPage === 'Forecast' && <ForecastContent />}
        {currentPage === 'About' && <AboutContent />}
      </Box>
    </ChakraProvider>
    </>
  );
}

export default App;

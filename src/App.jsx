import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { useState } from 'react';
import Header from './components/Header/Header';
import HomeContent from './components/PageContent/HomeContent';
import ForecastContent from './components/PageContent/Forecast/ForecastContent';
import AboutContent from './components/PageContent/AboutContent';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImage="url('https://cdn.pika.style/wallpapers/series-two/series-2-pika-wallpaper-6.png')"
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
  );
}

export default App;

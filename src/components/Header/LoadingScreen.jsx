import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.svg';

const LoadingScreen = () => {
    const [isReadyToFadeOut, setIsReadyToFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReadyToFadeOut(true);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
    {isReadyToFadeOut && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <img src={logo} alt="Logo" width="100" />
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default LoadingScreen;

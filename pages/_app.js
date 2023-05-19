import '@/styles/globals.css';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '@/Components/elements/Navbar';
import { colors, fonts } from '@/Components/assets/style';
import { Fragment } from 'react';

const theme = extendTheme({ colors, fonts });

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <Box sx={{ maxWidth: '7xl', marginX: 'auto' }}>
          <Navbar />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </Fragment>
  );
}

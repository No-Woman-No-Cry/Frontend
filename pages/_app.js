import '../styles/globals.css';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '@/Components/elements/Navbar';
import { colors, fonts } from '@/Components/assets/style';
import { Fragment } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '@/utils/UserContext';

const theme = extendTheme({ colors, fonts });

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Box sx={{ maxWidth: '7xl', marginX: 'auto' }}>
            <Navbar />
            <Component {...pageProps} />
          </Box>
        </UserProvider>
      </ChakraProvider>
    </Fragment>
  );
}

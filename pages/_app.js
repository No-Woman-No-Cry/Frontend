import '../styles/globals.css';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '@/Components/elements/Navbar';
import { colors, fonts } from '@/Components/assets/style';
import { Fragment, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, UserProvider } from '@/utils/UserContext';
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer autoClose={3000} theme='colored' newestOnTop={true} />
        </UserProvider>
      </ChakraProvider>
    </Fragment>
  );
}

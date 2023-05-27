import '../styles/globals.css';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '@/Components/elements/Navbar';
import EmployerNavbar from '@/Components/elements/EmployerNavbar';
import { colors, fonts } from '@/Components/assets/style';
import { Fragment, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, UserProvider } from '@/utils/UserContext';
import { ToastContainer } from 'react-toastify';

const theme = extendTheme({ colors, fonts });

export default function App({ Component, pageProps }) {
  const localData = useContext(UserContext);
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Box sx={{ maxWidth: '7xl', marginX: 'auto' }}>
            {localData && localData.user ? <Navbar /> : <EmployerNavbar />}
            <Component {...pageProps} />
          </Box>
          <ToastContainer autoClose={3000} theme='colored' newestOnTop={true} />
        </UserProvider>
      </ChakraProvider>
    </Fragment>
  );
}

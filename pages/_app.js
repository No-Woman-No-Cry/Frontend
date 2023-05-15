import "styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "@/Components/elements/Navbar";
import { colors, fonts } from '@/Components/assets/style';

const theme = extendTheme({ colors, fonts });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

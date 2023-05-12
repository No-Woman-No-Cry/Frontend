import "styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../Components/navbar";

// const color = {
//   white: "#fffffe",
//   whiteblue: "#d8eefe",
//   darkblue: "#094067",
//   textcard: "#d8eefe",
//   highlight: "#3da9fc",
//   headline: "#094067",
//   text: "#5f6c7b",
//   buttontext: "#fffffe",
//   stroke: "#094067",
// };
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const font = {
  heading: "Roboto",
  body: "roboto",
};

const theme = extendTheme(colors, font);

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

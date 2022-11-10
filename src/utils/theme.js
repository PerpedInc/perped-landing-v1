import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
const colors = {
  primary: {
    100: "#C1C1C1",
    200: "#000000", //lower btn
    300: "#C1C1C1",
    400: "#C1C1C1",
    500: "#000000", // upper btn
    600: "#C1C1C1",
    700: "#C1C1C1",
    800: "#C1C1C1",
    900: "#C1C1C1"
  }
};

const customTheme = extendTheme({ colors, styles: {
  global: (props) => ({
    body: {
      fontFamily: 'montserrat',
      // color: mode('black', 'black')(props),
      bg: mode('black', 'black')(props),
      lineHeight: 'base',
    },
  }),
},});

export default customTheme;
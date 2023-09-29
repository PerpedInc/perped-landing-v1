import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { FaqProvider } from "./contexts/FaqContext";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#090909",
        minHeight: "100vh",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: { color: "#AE58BD", textDecoration: "none" },
        fontFamily: "Source Code Pro Slim",
      },
    },
    Flex: {
      baseStyle: {
        fontFamily: "Source Code Pro Thick",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Source Code Pro Thick",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Source Code Pro Slim",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FaqProvider>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </FaqProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

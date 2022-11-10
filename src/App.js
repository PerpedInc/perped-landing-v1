import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import customTheme from "./utils/theme";

export default function App() {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      </ChakraProvider>
    </Router>
  );
}
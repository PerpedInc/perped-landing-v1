import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import perpedLogo from "./perpedLogo.png";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image width="200px" src={perpedLogo} alt="Perped" />
    </Box>
  );
}

import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import perpedLogo from "./perpedLogo.png";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image width="130px" height="40px" src={perpedLogo} alt="Perped" />
    </Box>
  );
}

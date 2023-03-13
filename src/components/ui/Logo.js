import React from "react";
import { Box, Image } from "@chakra-ui/react";
import perpedLogo from "./perpedLogo.png";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        width="130px"
        mb="30px"
        height="40px"
        src={perpedLogo}
        alt="Perped"
      />
    </Box>
  );
}

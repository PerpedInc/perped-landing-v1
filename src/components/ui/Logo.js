import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
    boxSize='60px'
    objectFit='fill'
    src= 'https://cdn.discordapp.com/attachments/962715842662002698/1040377439244791858/perped.png'
    alt='Dan Abramov'
  />
    </Box>
  );
}
import { Flex, Link, Button, Text, Image, Spacer, Box } from "@chakra-ui/react";
import { useState } from "react";

import LandingNav from "./Landing_Nav";

import arrow from "../../ui/arrow.png";
import perpedLogo from "../../ui/perpedLogo.png";

export default function LandingHeader() {
  return (
    <>
      <Flex
        fontFamily="Source Code Pro Thick"
        direction="row"
        align="center"
        justify="center"
        color="white"
        w="100%"
        p="30px 50px"
      >
        <Box w="fit-content">
          <Image
            width={130}
            height={40}
            mb={30}
            src={perpedLogo}
            alt="Perped"
          />
        </Box>
        <Spacer />
        <LandingNav />
      </Flex>
    </>
  );
}

import { Flex, Image, Spacer, Box } from "@chakra-ui/react";

import LandingNav from "./Landing_Nav";

import PERPED from "../../../images/PERPED.png";

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
          <Image width={200} height={60} mb={30} src={PERPED} alt="Perped" />
        </Box>
        <Spacer />
        <LandingNav />
      </Flex>
    </>
  );
}

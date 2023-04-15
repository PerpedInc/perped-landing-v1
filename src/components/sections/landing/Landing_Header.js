import { Flex, Image, Spacer, Box, useMediaQuery } from "@chakra-ui/react";

import LandingNav from "./Landing_Nav";

import PERPED from "../../../images/PERPED.png";

export default function LandingHeader() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 1080px)");

  return (
    <>
      <Flex
        direction="row"
        color="white"
        w="100%"
        p={isLargerThanMd ? "30px 60px" : "40px 30px"}
      >
        <Box w="fit-content">
          <Image
            width={isLargerThanMd ? 185 : 100}
            height={isLargerThanMd ? 55 : 30}
            src={PERPED}
            alt="Perped"
          />
        </Box>
        <Spacer />
        <LandingNav />
      </Flex>
    </>
  );
}

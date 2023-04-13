import { Flex } from "@chakra-ui/react";
import "./fonts.css";

import LandingHeader from "../sections/landing/Landing_Header";
import LandingHero from "../sections/landing/Landing_Hero";
import LandingFooter from "../sections/landing/Landing_Footer";

export default function LandingLayout() {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        m="0 auto"
        maxW="1650px"
        minW="fit-content"
        bgColor="#090909"
      >
        <LandingHeader />
        <LandingHero />
        <LandingFooter />
      </Flex>
    </>
  );
}

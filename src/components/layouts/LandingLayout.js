import { Flex } from "@chakra-ui/react";

import LandingHeader from "../sections/landing/Landing_Header";
import LandingHero from "../sections/landing/Landing_Hero";
import FaqHero from "../sections/faq/Faq_Hero";
import LandingFooter from "../sections/landing/Landing_Footer";

import { useFaq } from "../../contexts/FaqContext";

export default function LandingLayout() {
  const { faqOpen } = useFaq();

  return (
    <>
      <Flex
        direction="column"
        align="center"
        m="0 auto"
        maxW="1700px"
        minW="300px"
        bgColor="#090909"
      >
        <LandingHeader />
        {!faqOpen ? <LandingHero /> : <FaqHero />}
        <LandingFooter />
      </Flex>
    </>
  );
}

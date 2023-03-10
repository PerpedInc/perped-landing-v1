import { Flex } from "@chakra-ui/react";
import Header from "../sections/Landing_Header";
import Hero from "../sections/Landing_Hero";
import "./fonts.css";

export default function LandingLayout() {
  return (
    <>
      <Flex
        direction="column"
        w="100%"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
        <Hero />
      </Flex>
    </>
  );
}

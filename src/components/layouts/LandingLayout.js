import { Flex } from "@chakra-ui/react";
import Header from "../sections/Landing_Header";
import Hero from "../sections/Landing_Hero";
import "./fonts.css";

export default function LandingLayout() {
  return (
    <>
      <Flex direction="column" align="center" m="0 auto" maxW="1500px">
        <Header />
        <Hero />
      </Flex>
    </>
  );
}

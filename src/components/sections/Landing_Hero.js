import { Image, Heading, Text, Flex, Button } from "@chakra-ui/react";
import bgLogo from "../ui/bgLogo.png";

export default function Hero() {
  return (
    <Flex
      direction="column"
      align="left"
      w="100%"
      p="150px 0 0 50px"
      justify="center"
      color="white"
    >
      <Heading
        fontSize={90}
        letterSpacing="-1px"
        fontFamily="Source Code Pro Thick"
      >
        Trade in Perpetuity
      </Heading>
      <Text color="white" fontFamily="Source Code Pro Thick" ml="10px">
        The First True On-Chain Perpetuals Derivatives Platform For Real World
        Assets
      </Text>
      <Flex direction="row" gap="30px" m="30px 10px 10px 10px">
        <Button
          bgGradient="linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
          bgClip="border-box"
          mt="2px"
          fontFamily="Source Code Pro Thick"
          fontSize="15px"
          borderRadius="10px"
          padding="17px 25px 16px 25px"
          transition="0.5s"
          _hover={{
            color: "black",
          }}
        >
          Trade Now
        </Button>{" "}
        <Button fontFamily="Source Code Pro Slim" fontSize="14px">
          Learn More {">"}
        </Button>
      </Flex>
      <Image
        src={bgLogo}
        h="650px"
        w="550px"
        display="inline"
        zIndex="-1"
        position="absolute"
        top="110"
        left="850"
      />
    </Flex>
  );
}

import {
  Image,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import bgWave from "../../../images/bgWave.gif";

export default function LandingHero() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 1080px)");

  return (
    <Flex
      color="white"
      direction="column"
      align="left"
      position="relative"
      zIndex={0}
      w="100%"
      h={isLargerThanMd ? 700 : "fit-content"}
      pt={isLargerThanMd ? 200 : 120}
    >
      <Heading
        letterSpacing={-1}
        fontFamily="Source Code Pro Thick"
        bgGradient="linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
        bgClip="text"
        fontSize={isLargerThanMd ? 90 : 50}
        w={isLargerThanMd ? "80vw" : "90vw"}
        pl={isLargerThanMd ? "60px" : "30px"}
        mb={isLargerThanMd ? 0 : 4}
      >
        Trade in Perpetuity
      </Heading>
      <Text
        fontFamily="Source Code Pro Thick"
        color="white"
        ml="10px"
        w={isLargerThanMd ? "80vw" : "90vw"}
        pl={isLargerThanMd ? "60px" : 6}
        fontSize={isLargerThanMd ? 21 : 12}
      >
        The First True On-Chain Perpetuals Derivatives Platform For Real World
        Assets
      </Text>
      <Flex
        direction="row"
        gap={3}
        m="30px 10px 10px 10px"
        pl={isLargerThanMd ? "60px" : 6}
      >
        <Button
          bgGradient="linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
          bgClip="border-box"
          h={isLargerThanMd ? 45 : 34}
          w={isLargerThanMd ? 130 : 104}
          fontFamily="Source Code Pro Slim"
          fontSize={isLargerThanMd ? 18 : 12}
          borderRadius={10}
          padding="17px 25px"
          transition="transform 0.5s ease-in-out;"
          _active={{
            backgroundImage: "",
          }}
          _hover={{
            bgGradient:
              "linear-gradient(60.62deg, #5E7ECE 30.35%, #AE58BD 75.18%)",
          }}
        >
          Trade Now
        </Button>
        <Button
          fontSize={isLargerThanMd ? 18 : 12}
          h={isLargerThanMd ? 45 : 34}
          fontFamily="Source Code Pro Slim"
          bgColor="transparent"
          _active={{}}
          _hover={{
            color: "#AE58BD",
          }}
        >
          Learn More {">"}
        </Button>
      </Flex>
      <Box
        position="absolute"
        pt={isLargerThanMd ? 150 : 250}
        zIndex={-1}
        w="100%"
      >
        <Box
          position="absolute"
          w="100%"
          height={isLargerThanMd ? "100%" : "80%"}
          background="linear-gradient(to bottom, #090909 0%, rgba(9,9,9,0.7) 25%, #090909 50% )"
        />
        <Image src={bgWave} w="100%" />
      </Box>
    </Flex>
  );
}

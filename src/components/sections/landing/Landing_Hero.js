import { Image, Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import bgWave from "../../../images/bgWave.gif";

export default function LandingHero() {
  // const fetch = require("node-fetch");
  // const gifURL =
  //   "https://elementalblockchain.infura-ipfs.io/ipfs/QmdGwqdicdMhpr3zD8YCHLmHHncj3tzC33UJnD9iDadKbr";  // const [imageFetched, setImageFetched] = useState(null);

  // useEffect(() => {
  //   async function execute() {
  //     try {
  //       await fetch(gifURL).then(() => {
  //         setImageFetched(true);
  //       });
  //     } catch (error) {
  //       console.log("Pictures taking some time to load...");
  //     }
  //   }
  //   execute();
  // }, []);

  return (
    <Flex
      direction="column"
      align="left"
      w="100%"
      h={800}
      position="relative"
      pt={160}
      color="white"
    >
      <Heading
        pl={50}
        fontSize={90}
        letterSpacing={-1}
        fontFamily="Source Code Pro Thick"
        bgGradient="linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
        bgClip="text"
      >
        Trade in Perpetuity
      </Heading>
      <Text
        pl={50}
        color="white"
        fontSize={21}
        fontFamily="Source Code Pro Thick"
        ml="10px"
      >
        The First True On-Chain Perpetuals Derivatives Platform For Real World
        Assets
      </Text>
      <Flex direction="row" gap="30px" m="30px 10px 10px 10px" pl={50}>
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
        </Button>
        <Button
          fontFamily="Source Code Pro Slim"
          fontSize="14px"
          _hover={{
            color: "#AE58BD",
          }}
        >
          Learn More {">"}
        </Button>
      </Flex>
      <Box position="absolute" pt={90} zIndex={-1} w="100%">
        <Box
          position="absolute"
          w="100%"
          height="100%"
          background="linear-gradient(to bottom, #090909 0%, rgba(9,9,9,0.7) 25%, #090909 50%)"
        />
        <Image src={bgWave} w="100%" />
      </Box>
    </Flex>
  );
}

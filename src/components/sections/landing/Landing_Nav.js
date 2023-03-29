import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Flex, Link, Button, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

const MenuElement = ({
  children,
  toggleFunction,
  toggleState,
  subLinksLocation,
  subLinksName,
}) => {
  var LinksArray = [];

  var limit = subLinksLocation.length;
  for (var index = 0; index < limit; index++) {
    const link = subLinksLocation[index];
    const name = subLinksName[index];

    LinksArray.push(
      <>
        <Box display="block" fontSize={17}>
          <Link key={index} _hover={{ color: "#AE58BD" }} href={`/${link}`}>
            {name}
          </Link>
        </Box>
      </>
    );
  }

  const boxAnimation = {
    opacity: toggleState ? 1 : 0,
    transition: { duration: 0.1 },
  };
  return (
    <Box position="relative">
      <Flex direction="row" gap={5} justify="center" align="center">
        <Text
          onClick={toggleFunction}
          cursor="pointer"
          fontFamily="Source Code Pro Slim"
          fontSize={19}
        >
          {children}
        </Text>
        <FaChevronDown size={8} />
      </Flex>

      <motion.div animate={boxAnimation}>
        <Box
          w={130}
          display={toggleState ? "block" : "none"}
          fontFamily="Source Code Pro Slim"
          fontSize={20}
          zIndex={1}
          top={-5}
          pt={45}
          position="absolute"
          onMouseLeave={toggleFunction}
        >
          <Box
            bgGradient="linear-gradient(to bottom, rgba(94,126,206,1) 20%, rgba(174,88,189,1) 100%)"
            borderRadius={10}
            p={1}
          >
            <Flex
              bgColor="#090909"
              direction="column"
              gap={10}
              p={15}
              borderRadius={10}
              color="gray"
            >
              {LinksArray}
            </Flex>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default function LandingNav() {
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleCompany = () => {
    setShowCompany(!showCompany);
  };
  const toggleGovernence = () => {
    setShowGovernence(!showGovernence);
  };
  const toggleCommunity = () => {
    setShowCommunity(!showCommunity);
  };

  const [showAbout, setShowAbout] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showGovernence, setShowGovernence] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <>
      <Flex
        as="nav"
        wrap="wrap"
        align="center"
        justify="center"
        direction="row"
        gap={40}
      >
        <MenuElement
          toggleFunction={toggleAbout}
          toggleState={showAbout}
          subLinksLocation={["#", "#", "#", "#"]}
          subLinksName={["Blogs", "FAQs", "DOCs", "Academy"]}
        >
          About{" "}
        </MenuElement>

        <MenuElement
          toggleFunction={toggleCompany}
          toggleState={showCompany}
          subLinksLocation={["#", "#"]}
          subLinksName={["Goal", "Brand"]}
        >
          Company{" "}
        </MenuElement>

        <MenuElement
          toggleFunction={toggleGovernence}
          toggleState={showGovernence}
          subLinksLocation={["#", "#", "#"]}
          subLinksName={["Dashboard", "Forums", "Proposes"]}
        >
          Governence{" "}
        </MenuElement>

        <MenuElement
          toggleFunction={toggleCommunity}
          toggleState={showCommunity}
          subLinksLocation={["#", "#", "#", "#", "#"]}
          subLinksName={[
            "Discord",
            "Twitter",
            "Youtube",
            "LinkedIn",
            "Telegram",
          ]}
        >
          Community{" "}
        </MenuElement>

        <Button
          bgGradient="linear-gradient(110deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
          bgClip="border-box"
          fontFamily="Source Code Pro Thick"
          fontSize={18}
          borderRadius={15}
          ml={5}
          p="15px 50px"
          transition="0.5s"
          _hover={{
            color: "black",
          }}
        >
          Enter App
        </Button>
      </Flex>
    </>
  );
}

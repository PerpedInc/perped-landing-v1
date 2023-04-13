import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import PERPED from "../../../images/PERPED.png";

import {
  Flex,
  Link,
  Button,
  Text,
  Image,
  Box,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import burger from "../../../images/burger.png";
import { useState, useRef } from "react";

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
        <Box display="block" fontSize={18}>
          <Link key={index} href={`/${link}`} fontFamily="Source Code Pro Slim">
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
      <Flex direction="row" gap={2} align="center" justify="center">
        <Text onClick={toggleFunction} cursor="pointer" fontSize={19}>
          {children}
        </Text>
        <FaChevronDown size={8} />
      </Flex>

      <motion.div animate={boxAnimation}>
        <Box
          w={140}
          display={toggleState ? "block" : "none"}
          fontSize={20}
          zIndex={1}
          top={-1}
          pt={45}
          position="absolute"
          onMouseLeave={toggleFunction}
        >
          <Box
            bgGradient="linear-gradient(to right, rgba(94,126,206,1) 20%, rgba(174,88,189,1) 100%)"
            borderRadius={10}
            p="1px"
          >
            <Flex
              bgColor="#090909"
              direction="column"
              gap={2}
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
  const [isLargerThanMd] = useMediaQuery("(min-width: 1080px)");
  const btnRef = useRef();

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!isLargerThanMd ? (
        <>
          <Button ref={btnRef} colorScheme="dark" onClick={onOpen} pt={5}>
            <Image src={burger} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="#141414">
              <DrawerCloseButton color={"white"} />
              <DrawerHeader mt={20}>
                <Image width={160} height={50} src={PERPED} alt="Perped" />
              </DrawerHeader>

              <DrawerBody></DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <Flex pt={4} as="nav" align="center" direction="row" gap={10} mr={5}>
            <MenuElement
              toggleFunction={toggleAbout}
              toggleState={showAbout}
              subLinksLocation={["#", "#", "#", "#"]}
              subLinksName={["Blogs", "FAQs", "DOCs", "Academy"]}
            >
              About
            </MenuElement>

            <MenuElement
              toggleFunction={toggleCompany}
              toggleState={showCompany}
              subLinksLocation={["#", "#"]}
              subLinksName={["Goal", "Brand"]}
            >
              Company
            </MenuElement>

            <MenuElement
              toggleFunction={toggleGovernence}
              toggleState={showGovernence}
              subLinksLocation={["#", "#", "#"]}
              subLinksName={["Dashboard", "Forums", "Proposes"]}
            >
              Governence
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
              Community
            </MenuElement>

            <Button
              bgColor="#3A3A3A"
              bgGradient="linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
              bgClip="border-box"
              fontFamily="Source Code Pro Thick"
              fontSize={18}
              borderRadius={10}
              w={130}
              h={45}
              p="15px 50px"
              transition="transform 0.5s ease-in-out;"
              _active={{
                backgroundImage: "",
              }}
              _hover={{
                bgGradient:
                  "linear-gradient(60.62deg, #5E7ECE 30.35%, #AE58BD 75.18%)",
              }}
            >
              Enter App
            </Button>
          </Flex>
        </>
      )}
    </>
  );
}

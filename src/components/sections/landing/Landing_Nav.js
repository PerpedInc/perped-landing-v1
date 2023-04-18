import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import PERPED from "../../../images/PERPED.png";

import {
  Flex,
  Link,
  Button,
  Icon,
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

import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

import burger from "../../../images/burger.png";
import { useState, useRef } from "react";
import CustomButton from "./CutomButton";

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
      <Flex
        direction="row"
        gap={2}
        align="center"
        justify="center"
        cursor="pointer"
        onClick={toggleFunction}
      >
        <Text fontSize={19}>{children}</Text>
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

const DrawerItem = ({
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
    <Box mb={10} align="left">
      <Flex
        direction="row"
        align="center"
        justify="left"
        w="100%"
        cursor="pointer"
        onClick={toggleFunction}
      >
        <Text fontSize={16} color="white" ml={3} mr={2}>
          {children}
        </Text>
        <FaChevronDown size={7} color="white" />
      </Flex>

      <motion.div animate={boxAnimation}>
        <Box display={toggleState ? "block" : "none"}>
          <Flex direction="column" gap={2} p={15} color="gray">
            {LinksArray}
          </Flex>
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
          <Button ref={btnRef} colorScheme="dark" onClick={onOpen} pt={0}>
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
              <DrawerHeader mt={10} ml={2}>
                <Image
                  width={160}
                  height={50}
                  src={PERPED}
                  alt="Perped"
                  mb={5}
                />{" "}
                <CustomButton text="Enter App" />
              </DrawerHeader>

              <DrawerBody>
                <DrawerItem
                  toggleFunction={toggleAbout}
                  toggleState={showAbout}
                  subLinksLocation={["#", "#", "#", "#"]}
                  subLinksName={["Blogs", "FAQs", "DOCs", "Academy"]}
                >
                  About
                </DrawerItem>

                <DrawerItem
                  toggleFunction={toggleCompany}
                  toggleState={showCompany}
                  subLinksLocation={["#", "#"]}
                  subLinksName={["Goal", "Brand"]}
                >
                  Company
                </DrawerItem>

                <DrawerItem
                  toggleFunction={toggleGovernence}
                  toggleState={showGovernence}
                  subLinksLocation={["#", "#", "#"]}
                  subLinksName={["Dashboard", "Forums", "Proposes"]}
                >
                  Governence
                </DrawerItem>

                <DrawerItem
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
                </DrawerItem>
              </DrawerBody>

              <DrawerFooter>
                <Flex direction="row" gap={3} ml={2} w="100%">
                  <Link href="#">
                    <Icon as={FaDiscord} boxSize={30} color="#9d60c1" />
                  </Link>
                  <Link href="#">
                    <Icon as={FaTwitter} boxSize={30} color="#846cc6" />
                  </Link>
                  <Link href="#">
                    <Icon as={FaYoutube} boxSize={30} color="#7b70c8" />
                  </Link>
                  <Link href="#">
                    <Icon as={FaLinkedin} boxSize={30} color="#6d76cb" />
                  </Link>
                  <Link href="#">
                    <Icon as={FaTelegram} boxSize={30} color="#5e7ece" />
                  </Link>
                </Flex>
              </DrawerFooter>
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

            <CustomButton text="Enter App" />
          </Flex>
        </>
      )}
    </>
  );
}

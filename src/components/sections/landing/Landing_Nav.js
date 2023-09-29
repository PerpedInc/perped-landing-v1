import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { FaChevronDown } from "react-icons/fa";

import PERPED from "../../../images/PERPED.png";
import burger from "../../../images/burger.png";

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

import CustomButton from "./CustomButton";
import Icons from "./Icons";

import { useFaq } from "../../../contexts/FaqContext";

const MenuElement = ({
  children,
  toggleFunction,
  toggleState,
  subLinksLocation,
  subLinksName,
}) => {
  const { toggleFaq } = useFaq();

  var LinksArray = [];

  var limit = subLinksLocation.length;
  for (var index = 0; index < limit; index++) {
    const link = subLinksLocation[index];
    const name = subLinksName[index];

    if (name === "FAQs") {
      LinksArray.push(
        <>
          <Box key={index} display="block" fontSize={18}>
            <Button
              onClick={toggleFaq}
              backgroundColor={"transparent"}
              p={0}
              _hover={{ color: "#AE58BD", textDecoration: "none" }}
              _active={{}}
              fontFamily="Source Code Pro Slim"
            >
              FAQs
            </Button>
          </Box>
        </>
      );
    } else {
      LinksArray.push(
        <>
          <Box key={index} display="block" fontSize={18}>
            <Link
              href={`${link}`}
              target="_blank"
              fontFamily="Source Code Pro Slim"
            >
              {name}
            </Link>
          </Box>
        </>
      );
    }
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
        _hover={{
          color: "#AE58BD",
        }}
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
          <Link
            key={index}
            href={`${link}`}
            target="_blank"
            fontFamily="Source Code Pro Slim"
          >
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
        color="white"
        _hover={{ color: "#AE58BD" }}
      >
        <Text fontSize={16} ml={3} mr={2}>
          {children}
        </Text>
        <FaChevronDown size={7} />
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

  const toggleCommunity = () => {
    setShowCommunity(!showCommunity);
  };

  const [showAbout, setShowAbout] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
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
            <DrawerContent bgColor="#0E0E0E">
              <DrawerCloseButton color={"white"} />
              <DrawerHeader mt={10} ml={2} mb={7}>
                <Image
                  width={160}
                  height={50}
                  src={PERPED}
                  alt="Perped"
                  mb={10}
                />

                <CustomButton text="Enter App" />
              </DrawerHeader>

              <DrawerBody>
                <DrawerItem
                  toggleFunction={toggleAbout}
                  toggleState={showAbout}
                  subLinksLocation={["#", "#", "https://perped.gitbook.io/"]}
                  subLinksName={["Blogs", "FAQs", "Docs"]}
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
                  toggleFunction={toggleCommunity}
                  toggleState={showCommunity}
                  subLinksLocation={[
                    // "https://discord.gg/9Ac9DDEg6T",
                    "https://twitter.com/0xPerped",
                    "#",
                    "#",
                    "https://t.me/+cVUf9a8REyBhMWNk",
                  ]}
                  subLinksName={[
                    // "Discord",
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
                <Icons />
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
              subLinksLocation={["#", "#", "https://perped.gitbook.io/"]}
              subLinksName={["Blogs", "FAQs", "Docs"]}
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
              toggleFunction={toggleCommunity}
              toggleState={showCommunity}
              subLinksLocation={[
                // "https://discord.gg/9Ac9DDEg6T",
                "https://twitter.com/0xPerped",
                "#",
                "#",
                "https://t.me/+cVUf9a8REyBhMWNk",
              ]}
              subLinksName={[
                // "Discord",
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

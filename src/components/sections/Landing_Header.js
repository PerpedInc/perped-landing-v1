import { Flex, Link, Button, Text, Image } from "@chakra-ui/react";
import Logo from "../ui/Logo";
import arrow from "../ui/arrow.png";

const MenuItem = ({ children, to }) => {
  return (
    <Text
      display="block"
      cursor="pointer"
      fontFamily="Source Code Pro Slim"
      fontSize="17px"
    >
      <Link to={to}>{children}</Link>{" "}
      <Image src={arrow} display="inline" h={7} pb={2} />
    </Text>
  );
};

export default function Header() {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        // align="flex-start"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p="30px 50px"
        color="white"
      >
        <Logo />
        <Flex
          align="center"
          direction="row"
          gap="48px"
          justify="center"
          mr="20px"
        >
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/governence">Governence</MenuItem>
          <MenuItem to="/company">Company</MenuItem>
          <MenuItem to="/community">Community</MenuItem>
          <Button
            bgGradient="linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
            bgClip="border-box"
            mt="2px"
            fontFamily="Source Code Pro Thick"
            fontSize="14px"
            borderRadius="10px"
            padding="15px 50px 16px 50px"
            transition="0.5s"
            _hover={{
              color: "black",
            }}
          >
            Enter App
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

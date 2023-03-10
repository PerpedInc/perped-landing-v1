import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "@fontsource/montserrat/700.css";
import "@fontsource/source-code-pro";

import { Text, Button, Flex, Heading, Stack } from "@chakra-ui/react";

export default function Hero({ title, subtitle, image }) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack spacing={4} w="100%">
        <Heading
          as="h1"
          bgGradient="linear-gradient(315deg, #3C5F9E -0.41%, #4A3660 100.03%)"
          bgClip="text"
          textAlign="left"
          fontFamily={"Source Code Pro"}
          fontSize="100px"
        >
          {title}
        </Heading>
        <Text
          fontSize="20px"
          color="white"
          opacity="1"
          lineHeight={1.1}
          textAlign="left"
        >
          {subtitle}
        </Text>

        <Flex></Flex>
        <Link to="/finalApp" display="">
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Trade Now
          </Button>
        </Link>
        <Link to="">
          <Button
            display="inline"
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Learn More
          </Button>
        </Link>
        <Link to="/">
          <Button
            display="inline"
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Join Discord
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
};

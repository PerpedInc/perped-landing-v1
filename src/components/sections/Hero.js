import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "@fontsource/montserrat/700.css";
import "@fontsource/source-code-pro";

import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          bgGradient="linear-gradient(315deg, #3C5F9E -0.41%, #4A3660 100.03%)"
          bgClip="text"
          textAlign="right"
          fontFamily={"Source Code Pro"}
          fontSize="30px"
          paddingRight="60px"
        >
          {title}
        </Heading>
        <Heading
          fontFamily={"montserrat"}
          as="h1"
          size="3xl"
          color="white"
          opacity="1"
          fontWeight={900}
          lineHeight={1.1}
          paddingRight="60px"
          textAlign="right"
          letterSpacing="10px"
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: "100%", sm: "100%", md: "60%" }} mb={{ base: 12, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
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

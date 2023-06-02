import { useState } from "react";
import { Box, Button, useMediaQuery, Link } from "@chakra-ui/react";

export default function CustomButton({ text }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [isLargerThanMd] = useMediaQuery("(min-width: 1080px)");

  return (
    <Button
      position="relative"
      h={isLargerThanMd ? 45 : 30}
      w={isLargerThanMd ? 137 : 100}
      backgroundImage={
        !isClicked
          ? "linear-gradient(105.62deg, #5E7ECE 21.35%, #AE58BD 61.18%)"
          : ""
      }
      borderRadius={isLargerThanMd ? "10px" : "7px"}
      overflow="hidden"
      transition="0s"
      _hover={{}}
      _active={{
        backgroundImage: "none",
        backgroundColor: "#3A3A3A",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => {
        setIsClicked(false);
      }}
    >
      <Box
        style={{
          position: "absolute",
          width: "52px",
          height: "52px",
          transition: ".2s",
          left: isHovered
            ? "calc(50% - 52px/2 + 48px)"
            : "calc(50% - 52px/2 - 92px)",
          top: isHovered
            ? "calc(50% - 52px/2 + 17.5px)"
            : "calc(50% - 52px/2 - 32.5px)",
          backgroundColor: isClicked ? "#3A3A3A" : "#C4B5FD",

          filter: "blur(27px)",
        }}
      ></Box>
      <Box
        style={{
          position: "absolute",
          width: "88px",
          height: "88px",
          transition: ".2s",
          left: isHovered
            ? "calc(50% - 88px/2 - 20px)"
            : "calc(50% - 88px/2 + 90px)",
          top: isHovered
            ? "calc(50% - 88px/2 - 15.5px)"
            : "calc(50% - 88px/2 - 15.5px)",
          backgroundColor: isClicked ? "#3A3A3A" : "#9968CB",
          filter: "blur(27px)",
        }}
      ></Box>
      <Box
        style={{
          position: "absolute",
          width: "88px",
          height: "88px",
          transition: ".2s",
          left: isHovered
            ? "calc(50% - 88px/2 + 25px)"
            : "calc(50% - 88px/2 - 35px)",
          top: isHovered
            ? "calc(50% - 88px/2 - 52.5px)"
            : "calc(50% - 88px/2 + 57.5px)",
          backgroundColor: isClicked ? "#3A3A3A" : "#5EEAD4",
          filter: isHovered ? "blur(20px)" : "blur(32.5px)",
        }}
      ></Box>
      <Box
        style={{
          position: "absolute",
          width: "98px",
          height: "23px",
          left: "calc(50% - 98px/2)",
          top: "calc(50% - 23px/2)",
          fontFamily: "Source Code Pro",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "23px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        <Link
          fontSize={isLargerThanMd ? 18 : 12}
          w="100%"
          h="100%"
          href="https://app.perped.com"
          target="_blank"
          _hover={{}}
        >
          {text}
        </Link>
      </Box>
    </Button>
  );
}

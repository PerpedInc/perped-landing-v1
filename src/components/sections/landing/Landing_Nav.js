import { Flex, Link, Button, Text, Image, Spacer, Box } from "@chakra-ui/react";
import { useState } from "react";
import arrow from "../../ui/arrow.png";

// const MenuElement = ({ children, toggleFunction, toggleState }) => {
//   return (
//     <Box position="relative">
//       <Text
//         onClick={toggleFunction}
//         cursor="pointer"
//         fontFamily="Source Code Pro Slim"
//         fontSize={18}
//       >
//         {children} <Image src={arrow} display="inline" h={7} pb={2} />
//       </Text>
//       <Box
//         w={120}
//         display={toggleState ? "block" : "none"}
//         fontFamily="Source Code Pro Slim"
//         fontSize={16}
//         zIndex={1}
//         position="absolute"
//         top={35}
//         left={-25}
//       >
//         <Box
//           onMouseLeave={toggleFunction}
//           bgGradient="linear-gradient(110deg, rgba(94,126,206,1) 20%, rgba(174,88,189,1) 100%)"
//           borderRadius={10}
//           p={4}
//         >
//           <Flex
//             bgColor="#090909"
//             direction="column"
//             gap={10}
//             p={10}
//             borderRadius={8}
//           >
//             <Box display="block">
//               <Link href="#">Blog</Link>
//             </Box>
//             <Box display="block">
//               <Link href="#">FAQs</Link>
//             </Box>
//             <Box display="block">
//               <Link href="#">DOCs</Link>
//             </Box>
//             <Box display="block">
//               <Link href="#">Academy</Link>
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

const MenuItem = ({ children, to }) => {
  return (
    <Text
      display="block"
      cursor="pointer"
      fontFamily="Source Code Pro Slim"
      fontSize="17px"
    >
      <Link to={to}>{children}</Link>
      <Image src={arrow} display="inline" h={7} pb={2} />
    </Text>
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
        <Box position="relative">
          <Text
            onClick={toggleAbout}
            cursor="pointer"
            fontFamily="Source Code Pro Slim"
            fontSize={18}
          >
            About <Image src={arrow} display="inline" h={7} pb={2} />
          </Text>
          <Box
            w={120}
            display={showAbout ? "block" : "none"}
            fontFamily="Source Code Pro Slim"
            fontSize={16}
            zIndex={1}
            position="absolute"
            top={35}
            left={-25}
          >
            <Box
              onMouseLeave={toggleAbout}
              bgGradient="linear-gradient(110deg, rgba(94,126,206,1) 20%, rgba(174,88,189,1) 100%)"
              borderRadius={10}
              p={4}
            >
              <Flex
                bgColor="#090909"
                direction="column"
                gap={10}
                p={10}
                borderRadius={8}
              >
                <Box display="block">
                  <Link href="#">Blog</Link>
                </Box>
                <Box display="block">
                  <Link href="#">FAQs</Link>
                </Box>
                <Box display="block">
                  <Link href="#">DOCs</Link>
                </Box>
                <Box display="block">
                  <Link href="#">Academy</Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>

        <MenuItem to="/governence">Governence </MenuItem>
        <MenuItem to="/company">Company </MenuItem>
        <MenuItem to="/community">Community </MenuItem>
        <Button
          bgGradient="linear-gradient(110deg, rgba(94,126,206,1) 20%, rgba(174,88,189,1) 100%)"
          bgClip="border-box"
          fontFamily="Source Code Pro Thick"
          fontSize={16}
          letterSpacing={1}
          borderRadius={10}
          p="12px 16px 13px 16px"
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

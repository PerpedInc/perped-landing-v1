import {
  Flex,
  Link,
  Heading,
  Text,
  Spacer,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

import Icons from "./Icons";

import PERPED from "../../../images/PERPED.png";

export default function LandingFooter() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 1080px)");

  return (
    <>
      {isLargerThanMd ? (
        <>
          <Flex
            fontFamily="Source Code Pro Slim"
            direction="row"
            align="center"
            justify="center"
            w="100%"
            p="0 60px"
            pt={40}
            zIndex={1}
            mb={20}
          >
            <Flex direction="column">
              <Image
                width={187}
                height={57}
                mb={30}
                src={PERPED}
                alt="Perped"
              />
              <Text color="gray" w="70%" mb={5} fontSize={14}>
                Perped is a fully featured decentralized perpetuals platform
                that aims to bring real-world asset trading on-chain, including
                the complete list of S&P 500 Assets, Forex, and Commodities
                using next-gen First-party Oracles.
              </Text>
              <Icons />
            </Flex>
            <Spacer />
            <Flex direction="row" gap={70} color="gray" mr={30}>
              <Flex direction="column" gap={2}>
                <Heading size="sm" color="white" mb={1}>
                  About
                </Heading>
                <Link href="#">Blog</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">Docs</Link>
              </Flex>
              <Flex direction="column" gap={15}>
                <Heading size="sm" color="white" mb={1}>
                  Company
                </Heading>
                <Link href="#">Goal</Link>
                <Link href="#">Brand</Link>
              </Flex>
              <Flex direction="column" gap={15}>
                <Heading size="sm" color="white" mb={1}>
                  Community
                </Heading>
                <Link href="#">Discord</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">Youtube</Link>
                <Link href="#">LinkedIn</Link>
                <Link href="#">Telegram</Link>
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

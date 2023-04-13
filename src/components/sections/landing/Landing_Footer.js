import {
  Flex,
  Link,
  Icon,
  Heading,
  Text,
  Spacer,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

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
              <Text color="gray" w="60%" mb={5} fontSize={14}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Flex direction="row" gap={3}>
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
            </Flex>
            <Spacer />
            <Flex direction="row" gap={70} color="gray" mr={30}>
              <Flex direction="column" gap={2}>
                <Heading size="sm" color="white" mb={1}>
                  About
                </Heading>
                <Link href="#">Blog</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">DOCs</Link>
                <Link href="#">Academy</Link>
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
                  Governence
                </Heading>
                <Link href="#">Dashboard</Link>
                <Link href="#">Forums</Link>
                <Link href="#">Proposes</Link>
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

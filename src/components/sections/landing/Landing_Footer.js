import {
  Flex,
  Link,
  Icon,
  Heading,
  Text,
  Spacer,
  Image,
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
  return (
    <>
      <Flex
        fontFamily="Source Code Pro Thick"
        direction="row"
        align="center"
        justify="center"
        w="100%"
        p="20px 60px"
      >
        <Flex direction="column">
          <Image width={200} height={60} mb={30} src={PERPED} alt="Perped" />
          <Text color="gray" w="45%" mb={30}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Flex direction="row" gap={25}>
            <Link href="#">
              <Icon as={FaDiscord} boxSize={35} color="#9d60c1" />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} boxSize={35} color="#846cc6" />
            </Link>
            <Link href="#">
              <Icon as={FaYoutube} boxSize={35} color="#7b70c8" />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} boxSize={35} color="#6d76cb" />
            </Link>
            <Link href="#">
              <Icon as={FaTelegram} boxSize={35} color="#5e7ece" />
            </Link>
          </Flex>
        </Flex>
        <Spacer />
        <Flex direction="row" gap={70} color="gray" mr={30}>
          <Flex direction="column" gap={15}>
            <Heading color="white">About</Heading>
            <Link href="#">Blog</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">DOCs</Link>
            <Link href="#">Academy</Link>
          </Flex>
          <Flex direction="column" gap={15}>
            <Heading color="white">Company</Heading>
            <Link href="#">Goal</Link>
            <Link href="#">Brand</Link>
          </Flex>
          <Flex direction="column" gap={15}>
            <Heading color="white">Governence</Heading>
            <Link href="#">Dashboard</Link>
            <Link href="#">Forums</Link>
            <Link href="#">Proposes</Link>
          </Flex>
          <Flex direction="column" gap={15}>
            <Heading color="white">Community</Heading>
            <Link href="#">Discord</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Youtube</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Telegram</Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

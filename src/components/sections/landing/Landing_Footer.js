import { Flex, Link, Heading, Text, Spacer, Image } from "@chakra-ui/react";

import PERPED from "../../../images/PERPED.png";
import linkedin from "../../../images/linkedin.png";
import twitter from "../../../images/twitter.png";
import discord from "../../../images/discord.png";
import telegram from "../../../images/telegram.png";
import youtube from "../../../images/youtube.png";

export default function LandingFooter() {
  return (
    <>
      <Flex
        fontFamily="Source Code Pro Thick"
        direction="row"
        align="center"
        justify="center"
        w="100%"
        p="0px 60px"
      >
        <Flex direction="column">
          <Image width={200} height={60} mb={30} src={PERPED} alt="Perped" />
          <Text color="gray" w="45%" mb={30}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Flex direction="row" gap={25}>
            <Image src={discord} />
            <Image src={twitter} />
            <Image src={youtube} />
            <Image src={linkedin} />
            <Image src={telegram} />
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

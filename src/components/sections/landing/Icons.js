import { Flex, Link, Icon } from "@chakra-ui/react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
export default function Icons() {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="purple-blue" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#AE58BD" offset="31.35%" />
          <stop stopColor="#5E7ECE" offset="71.18%" />
        </linearGradient>
      </svg>
      <svg width="0" height="0">
        <linearGradient id="purple-cyan" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#00FFEC" offset="50%" />
          <stop stopColor="#AE58BD" offset="100%" />
        </linearGradient>
      </svg>
      <Flex direction="row" gap={3} w="100%">
        {/* <Link href="https://discord.gg/9Ac9DDEg6T" target="_blank">
          <Icon
            as={FaDiscord}
            boxSize={7}
            fill="url(#purple-blue)"
            _hover={{
              fill: "url(#purple-cyan)",
            }}
          />
        </Link> */}
        <Link href="https://twitter.com/0xPerped" target="_blank">
          <Icon
            as={FaTwitter}
            boxSize={7}
            fill="url(#purple-blue)"
            _hover={{ fill: "url(#purple-cyan)" }}
          />
        </Link>
        {/* <Link href="#">
          <Icon
            as={FaYoutube}
            boxSize={7}
            transition="1s"
            fill="url(#purple-blue)"
            _hover={{ fill: "url(#purple-cyan)" }}
          />
        </Link> */}
        <Link href="https://t.me/+cVUf9a8REyBhMWNk" target="_blank">
          <Icon
            as={FaTelegram}
            boxSize={7}
            transition="1s"
            fill="url(#purple-blue)"
            _hover={{ fill: "url(#purple-cyan)" }}
          />
        </Link>
      </Flex>
    </>
  );
}

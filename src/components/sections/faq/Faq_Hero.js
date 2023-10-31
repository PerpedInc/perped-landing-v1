import { useEffect, useState } from "react";

import { Flex, Image, Spacer, Box, Heading, Text } from "@chakra-ui/react";

import { faqQuestions, faqAnswers } from "../../../constants/faqInfo";

import left from "../../../images/left.png";
import right from "../../../images/right.png";

import CustomArrow from "./CustomArrow";

function QAAItem({ q, a, isLast }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Box
        w="100%"
        borderBottom={isLast ? "1px solid #6E67B6" : "3px solid #6E67B6"}
        p={5}
      >
        <Flex direction="row">
          <Heading fontSize="24px" color="white">
            {q}
          </Heading>
          <Spacer />
          <CustomArrow toggle={toggle} setToggle={setToggle} />
        </Flex>
        {toggle ? (
          <Box mt={5}>
            <Text fontSize="15px" color="white">
              {a}
            </Text>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default function FaqHero() {
  const [qaSlotGenerated, setQASlotGenerated] = useState(false);
  const [qaArray, setQAArray] = useState([]);

  useEffect(() => {
    var limit = faqQuestions.length;
    var finalArray = [];
    for (var index = 0; index < limit; index++) {
      const q = faqQuestions[index];
      const a = faqAnswers[index];

      if (index === limit - 1) {
        finalArray.push(
          <>
            <QAAItem q={q} a={a} isLast={true} />
          </>
        );
      } else {
        finalArray.push(
          <>
            <QAAItem q={q} a={a} isLast={false} />
          </>
        );
      }
    }
    if (finalArray.length > 0) {
      setQAArray(finalArray);
      setQASlotGenerated(true);
    }
  }, []);

  return (
    <>
      <Flex
        position="relative"
        alignItems="flex-start"
        direction="row"
        w="100%"
        mt={10}
      >
        <Image
          src={right}
          w="15%"
          position="absolute"
          top="0"
          left="0"
          height="1650px"
        />
        <Spacer />
        <Flex direction="column" w="65%" fontFamily="Source Code Pro Thick">
          <Box
            fontFamily="Source Code Pro Thick"
            borderBottom="1px solid #6E67B6"
            w="100%"
            align="center"
            pb="60px"
          >
            <Heading
              fontSize="50px"
              fontFamily="Source Code Pro Thick"
              color="white"
              lineHeight="17px"
            >
              FAQs
            </Heading>
          </Box>
          <Flex direction="column">
            {qaSlotGenerated ? <>{qaArray}</> : null}
          </Flex>
        </Flex>
        <Spacer />
        <Image
          src={left}
          w="15%"
          h="100%"
          position="absolute"
          top="0"
          right="0"
          height="1650px"
        />
      </Flex>
    </>
  );
}

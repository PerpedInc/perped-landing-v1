import { Button } from "@chakra-ui/react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export default function CustomArrow({ toggle, setToggle }) {
  return (
    <>
      {!toggle ? (
        <>
          <Button
            _active={{}}
            _hover={{}}
            bgColor="transparent"
            borderRadius="50%"
            border="1px solid #6E67B6"
            p={0}
            onClick={() => setToggle(true)}
          >
            <BsChevronDown color="white" />
          </Button>
        </>
      ) : (
        <>
          <Button
            _active={{}}
            _hover={{}}
            borderRadius="50%"
            p={0}
            border="1px solid #6E67B6"
            bgColor="transparent"
            onClick={() => setToggle(false)}
          >
            <BsChevronUp color="white" />
          </Button>
        </>
      )}
    </>
  );
}

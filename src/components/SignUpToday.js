import { Container, Box, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import LearnMore from "./buttons/LearnMore";
import GetStarted from "./buttons/GetStarted";

const SignUpToday = () => {
  return (
    <Box
      bg={"white"}
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      p={{ base: "50px 20px", sm: "100px 40px" }}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={"30px"}
        width={"100%"}
      >
        <Heading color="#333" fontSize={{ base: "32px", sm: "50px" }}>
          Sign up today.
        </Heading>
        <Flex gap={"20px"}>
          <LearnMore
            lineHeight="1.2em"
            fontSize="14px"
            height="40px"
            bg="rgb(235, 235, 235)"
            color="black"
          />
          <GetStarted
            lineHeight="1.2em"
            fontSize="14px"
            height="40px"
            color="rgb(255, 212, 0)"
            bg="rgb(34, 34, 34)"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUpToday;

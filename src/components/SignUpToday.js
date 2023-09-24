import { Container, Box, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import LearnMore from "./buttons/LearnMore";
import GetStarted from "./buttons/GetStarted";

const SignUpToday = () => {
  return (
    <Box
      bg={"white"}
      h={{ base: "50vh", sm: "20vh" }}
      alignItems={"center"}
      width={"100%"}
      p={5}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading fontSize={{ base: "32px", sm: "50px" }} mb={5}>
          Sign up today.
        </Heading>
        <Flex gap={4}>
          <LearnMore height="40px" bg="rgb(235, 235, 235)" color="black" />
          <GetStarted
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

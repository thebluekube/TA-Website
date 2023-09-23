import { Container, Box, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import LearnMore from "./buttons/LearnMore";
import GetStarted from "./buttons/GetStarted";

const SignUpToday = () => {
  return (
    <Container height={"20vh"} display={"flex"} alignItems={"center"} p={4}>
      <Box alignItems={"center"} width={"100%"}>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading fontSize={"50px"} mb={5}>
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
    </Container>
  );
};

export default SignUpToday;

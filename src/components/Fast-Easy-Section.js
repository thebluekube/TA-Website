import { Container, Flex, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
import ReadMore from "./buttons/ReadMore";

const FastEasySection = () => {
  const boxStyles = {
    width: "190px",
  };
  return (
    <Container width="400px" p={5} height="80vh" display={"flex"}>
      <Flex
        direction={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        margin={"20px"}
      >
        <Flex direction={"row"}>
          <Box></Box>
          <Box {...boxStyles}>
            <Heading mb={3} color="#333">
              Fast
            </Heading>
            <Text fontSize="lg" color={"#888"} mb={5}>
              You've never made a class related content this fast before.
            </Text>
            <ReadMore color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
          </Box>
        </Flex>
        <Flex direction={"row"}>
          <Box></Box>
          <Box {...boxStyles}>
            <Heading mb={3} color="#333">
              Easy
            </Heading>
            <Text fontSize="lg" color={"#888"} mb={5}>
              Works with standards and styles you're familiar with.
            </Text>
            <ReadMore color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default FastEasySection;

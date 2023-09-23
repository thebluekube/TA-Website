import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import ReadMore from "./buttons/ReadMore";

const FastEasySection = () => {
  const boxStyles = {
    width: "190px",
  };
  return (
    <Box
      p={6}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bg={"white"}
      width={"100%"}
      gap={6}
    >
      <Flex direction={"row"}>
        <Box width={"300px"} height={"240px"} alignItems={"center"}>
          <Image borderRadius={"20px"} src="./fast.jpg" />
        </Box>
        <Box width={"190px"}>
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
        <Box width={"300px"} height={"240px"} alignItems={"center"}>
          <Image borderRadius={"20px"} src="./easy.jpg" />
        </Box>
        <Box width={"190px"}>
          <Heading mb={3} color="#333">
            Easy
          </Heading>
          <Text fontSize="lg" color={"#888"} mb={5}>
            Works with standards and styles you're familiar with.
          </Text>
          <ReadMore color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
        </Box>
      </Flex>
    </Box>
  );
};

export default FastEasySection;

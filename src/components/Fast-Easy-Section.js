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
  return (
    <Box
      h={{ base: "80vh", md: "90vh" }}
      p={"100px 0"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bg={"white"}
      width={"100%"}
      gap={6}
    >
      <Flex direction={"row"} gap={7} alignItems={"center"} padding="40px">
        <Box alignItems={"center"}>
          <Image
            width="320px"
            height="240px"
            borderRadius={"20px"}
            src="./fast.jpg"
          />
        </Box>
        <Box width={"190px"}>
          <Heading mb={3} color="#333">
            Fast
          </Heading>
          <Text fontSize={{ base: "14px", sm: "lg" }} color={"#888"} mb={5}>
            You've never made a class related content this fast before.
          </Text>
          <ReadMore color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
        </Box>
      </Flex>
      <Flex direction={"row"} gap={7} alignItems={"center"}>
        <Box alignItems={"center"}>
          <Image
            borderRadius={"20px"}
            width="320px"
            height="240px"
            src="./easy.jpg"
          />
        </Box>
        <Box width={"190px"}>
          <Heading mb={3} color="#333">
            Easy
          </Heading>
          <Text fontSize={{ base: "14px", sm: "lg" }} color={"#888"} mb={5}>
            Works with standards and styles you're familiar with.
          </Text>
          <ReadMore color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
        </Box>
      </Flex>
    </Box>
  );
};

export default FastEasySection;

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
      h={"min-content"}
      p={"100px 0"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bg={"white"}
      width={"100%"}
      gap={6}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        p={"40px"}
        gap={"40px"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        h={"auto"}
      >
        <Box>
          <Image
            width="320px"
            height="240px"
            borderRadius={"20px"}
            src="./fast.jpg"
          />
        </Box>
        <Box
          width={"320px"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          alignSelf={"stretch"}
          alignContent={"flex-start"}
          h={"auto"}
          gap={"20px"}
        >
          <Heading
            fontSize={{ base: "32px", sm: "50px" }}
            color="#001122"
            letterSpacing={"-2.1px"}
            lineHeight={"1.2em"}
            textAlign={"left"}
            overflow={"visible"}
          >
            Fast
          </Heading>
          <Text
            width={{ base: "150px", sm: "280px" }}
            fontSize={{ base: "14px", sm: "24px" }}
            fontWeight={"medium"}
            color={"#888888"}
            letterSpacing={"-0.5px"}
            lineHeight={"1.5em"}
            textAlign={"left"}
          >
            You've never made a class related content this fast before.
          </Text>
          <ReadMore
            fontWeight="semibold"
            fontSize="14px"
            lineHeight="1.2em"
            height="40px"
            color="rgb(255, 212, 0)"
            bg="rgb(34, 34, 34)"
          />
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", sm: "row" }}
        p={"40px"}
        gap={"40px"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        h={"auto"}
      >
        <Box>
          <Image
            borderRadius={"20px"}
            width="320px"
            height="240px"
            src="./easy.jpg"
          />
        </Box>
        <Box
          width={"320px"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          alignSelf={"stretch"}
          alignContent={"flex-start"}
          h={"auto"}
          gap={"20px"}
        >
          <Heading
            fontSize={{ base: "32px", sm: "50px" }}
            color="#001122"
            letterSpacing={"-2.1px"}
            lineHeight={"1.2em"}
            textAlign={"left"}
            overflow={"visible"}
          >
            Easy
          </Heading>
          <Text
            width={{ base: "150px", sm: "280px" }}
            fontSize={{ base: "14px", sm: "24px" }}
            fontWeight={"medium"}
            color={"#888888"}
            letterSpacing={"-0.5px"}
            lineHeight={"1.5em"}
            textAlign={"left"}
          >
            Works with standards and styles you're familiar with.
          </Text>
          <ReadMore
            fontWeight="semibold"
            fontSize="14px"
            lineHeight="1.2em"
            height="40px"
            color="rgb(255, 212, 0)"
            bg="rgb(34, 34, 34)"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FastEasySection;

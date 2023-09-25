import { Container, Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Review = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      bg={"white"}
      p={"100px 40px "}
      gap={"60px"}
    >
      <Heading
        fontSize={{ base: "32px", sm: "50px" }}
        color="#001122"
        letterSpacing={"-2.1px"}
        lineHeight={"1.2em"}
      >
        Reviews
      </Heading>
      <Flex
        direction={"column"}
        maxW={"100%"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Box width={"500px"}>
          <Text
            fontSize={{ base: "18px", sm: "24px" }}
            textAlign={"center"}
            color={"#888"}
            letterSpacing={"-0.7px"}
            lineHeight={"1.5em"}
          >
            “Thank you for creating such a transformative solution, particularly
            for educators! My classroom got transformed from conventional to
            Teach Assist driven in less than a week.”
          </Text>
        </Box>
        <Flex direction={"row"} gap={"15px"}>
          <Box>
            <Image
              width={"50px"}
              height={"50px"}
              borderRadius={"50%"}
              src="./Adeola.jpg"
            />
          </Box>
          <Box display={"flex"} flexDir={"column"}>
            <Text
              fontSize={{ base: "16px", sm: "20px" }}
              letterSpacing={"-0.5px"}
              lineHeight={"1.4em"}
              color={"#001122"}
              fontWeight={"semibold"}
            >
              Adeola Gunn
            </Text>
            <Text
              textAlign={"left"}
              fontSize={{ base: "10px", sm: "14px" }}
              color={"#666666"}
              lineHeight={"1.5em"}
            >
              @Deola
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Review;

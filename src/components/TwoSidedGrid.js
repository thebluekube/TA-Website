"use client";
import {
  Box,
 VStack,
  HStack,
  Flex,
  Image as ChakraImage,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import GetStarted from "./buttons/GetStarted";
import LearnMore from "./buttons/LearnMore";
import Image from "next/image";

const TwoSidedGrid = ({
  image,
  imageSide = "left",
  heading,
  subline,
  cta1,
  cta2,
}) => {
  const sideOrder = useBreakpointValue({ base: "none", sm: imageSide });


  return (
    <Flex
      direction={{
        base:"column",sm:sideOrder === "right" || imageSide == "right" ? "row-reverse" : "row"
      }}
      height="600px"
      bg="white"
      justifyContent={"space-evenly"}
    >
      <Flex
        flex={1}
        boxSize="100%"
        align="center"
        justify="center"
        bgImage={image}
        bgSize="cover"
        bgPos="center"
      ></Flex>
      <Flex
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}

      >
      <Box width={{ base: "320px", sm: "400px" }}>
  <VStack gap="10px"> 
    <Heading
      fontSize={{ base: "32px", md: "50px" }}
      color="#333333"
      letterSpacing="-2px"
      lineHeight="1.2em"
      fontWeight="bold"
      alignSelf={'flex-start'}
    >
      {heading}
    </Heading>
    <Text
      fontSize={{ base: "18px", md: "24px" }}
      color="#888888"
      letterSpacing="-0.5px"
      lineHeight="1.5em"
      fontWeight="medium"
       mb={'10px'}
    >
      {subline}
    </Text>
  </VStack>
  <HStack gap="15px">
    <GetStarted color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
    <LearnMore bg="rgb(235, 235, 235)" color="black" />
  </HStack>
</Box>

      </Flex>
    </Flex>
  );
};

export default TwoSidedGrid;

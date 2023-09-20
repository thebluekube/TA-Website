"use client";
import {
  Box,
  Button,
  SimpleGrid,
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
  const imageStyles = {
    flexShrink: 0,
    flex: "1 0 0px",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    padding: "0px",
    alignContent: "center",
    flexWrap: "nowrap",
    gap: 20,
    backgroundImage: `url('${image}')`, // Replace 'your_image_url' with actual image URL
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "0px",
  };

  return (
    <Flex
      //   columns={{ base: 1, sm: 2 }}
      direction={
        sideOrder === "right" || imageSide == "right" ? "row-reverse" : "row"
      }
      height="60vh"
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
        <Box width="400px" p={5}>
          <Heading mb={3} color="#333">
            {heading}
          </Heading>
          <Text fontSize="lg" color={"#888"} mb={5}>
            {subline}
          </Text>
          <HStack>
            <GetStarted color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)" />
            <LearnMore bg="rgb(235, 235, 235)" color="black" />
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TwoSidedGrid;

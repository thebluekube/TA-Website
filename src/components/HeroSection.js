"use client";
import React from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  useBreakpointValue,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import GetStarted from "./buttons/GetStarted";
import LearnMore from "./buttons/LearnMore";

const HeroSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 760px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const buttonStyles = {
    colorScheme: "white",
    size: "lg",
    variant: "solid",
    color: "black",
    bg: "white",
  };

  const headingFontSize = useBreakpointValue(
    {
      base: "32px",
      md: "50px",
      lg: "50px",
    },
    { fallback: "50px" }
  );
  const sublineFontSize = useBreakpointValue({
    base: "18px",
    md: "24px",
    lg: "24px",
  });

  return (
    <Flex
      flexDirection={"column"}
      bg="black"
      h="600px"
      w={"100%"}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={"60px"}
      gap={"20px"}
    >
      <Box w={{ base: "320px", sm: "100%" }}>
        <Text
          fontSize={isMobile ? "32px" : "50px"}
          letterSpacing={"-2px"}
          lineHeight={"1.2em"}
          fontWeight={700}
          color="#ffd400"
        >
          Supercharge Teaching with Teach Assist AI
        </Text>
      </Box>
      <Box w={{ base: "320px", sm: "100%" }}>
        <Text
          fontSize={isMobile ? "14px" : "24px"}
          lineHeight="1.5"
          letterSpacing={"-0.5px"}
          color="rgba(255, 255, 255, 0.6)"
          maxWidth="634px"
          mx="auto"
        >
          Transition from effort to efficiency with Teach Assist AI, the digital
          assistant accelerating workflows for teaching professionals.
        </Text>
      </Box>
      <Stack direction={"row"} spacing={4} align="center" marginTop="20px">
        {/* <Button {...buttonStyles}>Get Started</Button> */}
        <GetStarted height="40px" fontSize="14px" />
        <LearnMore height="40px" fontSize="14px" />
        {/* <Button
          colorScheme="white"
          size="lg"
          variant="outline"
          color="white"
          bg="rgba(255, 255, 255, 0.25)"
        >
          Learn More
        </Button> */}
      </Stack>
    </Flex>
  );
};

export default HeroSection;

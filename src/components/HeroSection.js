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
      h="80vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Text
        fontSize={isMobile ? "32px" : "50px"}
        fontWeight={700}
        color="#ffd400"
      >
        Supercharge Teaching with Teach Assist AI
      </Text>
      <Text
        // fontSize={sublineFontSize}
        fontSize={isMobile ? "18px" : "24px"}
        lineHeight="1.5"
        color="rgba(255, 255, 255, 0.6)"
        maxWidth="634px"
        mt="25px"
        mx="auto"
      >
        Transition from effort to efficiency with Teach Assist AI, the digital
        assistant accelerating workflows for teaching professionals.
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="center"
        marginTop="48px"
      >
        {/* <Button {...buttonStyles}>Get Started</Button> */}
        <GetStarted />
        <LearnMore />
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

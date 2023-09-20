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

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 760px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const buttonStyles = {
    colorScheme: "white",
    size: "md",
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
        color="#fff"
        maxWidth="634px"
        mt="25px"
        mx="auto"
      >
        Joye Transition from effort to efficiency with Teach Assist AI, the
        digital assistant accelerating workflows for teaching professionals.
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="center"
        marginTop="48px"
      >
        <Button {...buttonStyles}>Get Started Now</Button>
        <Button
          colorScheme="white"
          size="lg"
          variant="outline"
          color="black"
          bg="white"
        >
          Learn More
        </Button>
      </Stack>
    </Flex>
  );
};

export default Hero;

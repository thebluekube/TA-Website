"use client";
import React from "react";
import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import SignUp from "./buttons/SignUp";

const Navbar = () => {
  const desktopLogo = "./wide-logo.svg";
  const mobileLogo = "./mobile-logo.svg";
  return (
    <Box width={"100%"} bg="white">
      <Flex
        border={"1px solid black"}
        padding={"24px"}
        gap={"24px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={{ base: "130px", sm: "250px" }}>
          <Image objectFit={"cover"} src={desktopLogo} />
        </Box>
        <ChakraLink href="https://app.teachassist.ai/register" isExternal>
          <SignUp fontSize="14px" />
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;

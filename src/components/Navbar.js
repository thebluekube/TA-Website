"use client";
import React from "react";
import { Box, Flex, Img, Link as ChakraLink } from "@chakra-ui/react";
import SignUp from "./buttons/SignUp";

const Navbar = () => {
  return (
    <Box width={"100%"} bg="white">
      <Flex
        border={"1px solid black"}
        padding={"24px"}
        gap={"24px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={{ base: "150px", sm: "250px" }} >
          <Img src="/Logo.png" />
        </Box>
        <ChakraLink href="https://app.teachassist.ai/register">
          <SignUp fontSize="14px" />
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;

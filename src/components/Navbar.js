"use client";
import React from "react";
import { Box, Flex, Img } from "@chakra-ui/react";
import SignUp from "./buttons/SignUp";

const Navbar = () => {
  return (
    <Box width={'100%'} bg="white">
      <Flex border={'1px solid black'} padding={'24px'} gap={'24px'} justifyContent={'space-between'} alignItems={'center'}>
        <Box  width={{base:'150px',sm:'190px'}} height={'40px'}>
        <Img src="/logo.png"/>
        </Box>
        <SignUp fontSize="14px"/>
      </Flex>
      
    </Box>
  );
};

export default Navbar;

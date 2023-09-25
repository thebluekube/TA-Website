import React from "react";
import { Box } from "@chakra-ui/react";

export function Card(props) {
  const { children, isPopular, ...rest } = props;
  return (
    <Box
      bg={"white"}
      position="relative"
      px="6"
      pb="6"
      pt="12"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      {...rest}
    >
      {isPopular}
      {children}
    </Box>
  );
}

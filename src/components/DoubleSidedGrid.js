import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const DoubleSidedGrid = ({ box1Props, box2Props }) => {
  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }} 
      bg="white"
      p={{ base: "50px 20px", sm: "100px 40px" }}
      alignItems="center"
      justifyContent="center"
      gap={'60px'}
      
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
       
        maxWidth={{ base: "100%", md: "470px" }} 
      >
        {box1Props.image}
        <Heading
        alignSelf={'flex-start'}
          fontSize={{ base: "20px", sm: "24px" }} 
          color="#001122"
          letterSpacing="-0.7px"
          lineHeight="1.5em"
          fontWeight="semibold"
        >
          {box1Props.heading}
        </Heading>
        <Text
        textAlign={'left'}
          fontSize={{ base: "16px", sm: "20px" }}
          color="#888888"
          letterSpacing="-0.5px"
          lineHeight="1.4em"
          fontWeight="medium"
        >
          {box1Props.subline}
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
       textAlign={'left'}
        maxWidth={{ base: "100%", md: "470px" }} 
      >
        {box2Props.image}
        <Heading
        alignSelf={'flex-start'}
          fontSize={{ base: "20px", sm: "24px" }} 
          color="#001122"
          letterSpacing="-0.7px"
          lineHeight="1.5em"
          fontWeight="semibold"
        >
          {box2Props.heading}
        </Heading>
        <Text
        
          fontSize={{ base: "16px", sm: "20px" }}
          color="#888888"
          letterSpacing="-0.5px"
          lineHeight="1.4em"
          fontWeight="medium"
        >
          {box2Props.subline}
        </Text>
      </Box>
    </Flex>
  );
};

export default DoubleSidedGrid;

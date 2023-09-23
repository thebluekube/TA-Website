import { Container, Flex, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";

const Review = () => {
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"80vh"}
      border={"1px solid"}
    >
      <Box width={"600px"}>
        <Flex direction={"column"}>
          <Heading
            fontSize={"50px"}
            alignSelf={"center"}
            mb={8}
            color="#001122"
          >
            Reviews
          </Heading>
          <Text fontSize={"24px"} textAlign={"center"} color={"#888"} mb={5}>
            “Thank you for creating such a transformative solution, particularly
            for educators! My classroom got transformed from conventional to
            Teach Assist driven in less than a week.”
          </Text>
          <Flex alignSelf={"center"} direction={"row"} gap={"10px"}>
            <Box alignSelf={"center"}>pic</Box>
            <Box>
              <Text fontSize={"20px"} color={"#001122"}>
                Adeola Gunn
              </Text>
              <Text fontSize={"14px"} color={"#666666"}>
                @Deola
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Review;

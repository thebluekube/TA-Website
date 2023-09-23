import { Container, Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Review = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      height={"60vh"}
      bg={"white"}
      p={10}
    >
      <Flex direction={"column"} width={"600px"}>
        <Heading fontSize={"50px"} alignSelf={"center"} mb={8} color="#001122">
          Reviews
        </Heading>
        <Text fontSize={"24px"} textAlign={"center"} color={"#888"} mb={5}>
          “Thank you for creating such a transformative solution, particularly
          for educators! My classroom got transformed from conventional to Teach
          Assist driven in less than a week.”
        </Text>
        <Flex alignSelf={"center"} direction={"row"} gap={"10px"}>
          <Box alignSelf={"center"}>
            <Image
              width={"50px"}
              height={"50px"}
              borderRadius={"50px"}
              src="./Adeola.jpg"
            />
          </Box>
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
  );
};

export default Review;

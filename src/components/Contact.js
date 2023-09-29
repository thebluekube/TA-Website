import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const inputStyles = {
  bg: "rgb(235, 235, 235)",
  color: "#000",
  fontSize: "16px",
};

const ContactForm = () => {
  return (
    <Box
      bg={"white"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      p={"100px 40px"}
      width={"100%"}
      gap={"60px"}
    >
      <Heading
        fontSize={{ base: "32px", sm: "50px" }}
        color="#001122"
        letterSpacing={"-2.1px"}
        lineHeight={"1.2em"}
        fontWeight={"bold"}
      >
        Contact
      </Heading>
      <Box height={"290px"} alignItems={"center"}>
        <Flex mb={3}>
          <FormControl>
            <Input {...inputStyles} name="name" placeholder="Name" />
          </FormControl>
          <FormControl ml={4}>
            <Input {...inputStyles} name="email" placeholder="Email" />
          </FormControl>
        </Flex>
        <FormControl mb={2}>
          <Input
            {...inputStyles}
            p={4}
            as="textarea"
            height={"154px"}
            width={"100%"}
            name="message"
            placeholder="Message"
          />
        </FormControl>
        <Button width={"100%"} color="rgb(255, 212, 0)" bg="rgb(34, 34, 34)">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;

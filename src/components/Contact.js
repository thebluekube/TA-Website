import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";

const inputStyles = {
  bg: "rgb(235, 235, 235)",
  color: "#000", // Text color
};

const ContactForm = () => {
  return (
    <Center h={{ base: "80vh", sm: "60vh" }} bg={"white"}>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        p={4}
        maxWidth={"500px"}
        width={"100%"}
        textAlign={"center"}
      >
        <Heading fontSize={{ base: "32px", sm: "50px" }} color="#333" mb={3}>
          Contact
        </Heading>
        <Box display={"flex"} flexDir={"row"} mt={10}>
          <FormControl>
            <Input {...inputStyles} name="name" placeholder="Name" />
          </FormControl>
          <FormControl ml={4}>
            <Input {...inputStyles} name="email" placeholder="Email" />
          </FormControl>
        </Box>
        <FormControl mt={4}>
          <Input
            {...inputStyles}
            p={4}
            as="textarea"
            height={"190px"}
            width={"100%"}
            name="message"
            placeholder="Message"
          />
        </FormControl>
        <Button
          mt={4}
          width={"100%"}
          color="rgb(255, 212, 0)"
          bg="rgb(34, 34, 34)"
        >
          Send
        </Button>
      </Box>
    </Center>
  );
};

export default ContactForm;

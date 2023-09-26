import React from "react";
import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { Card, CardProps } from "./Card";
import { FaCheck } from "react-icons/fa";

export function PricingCard(props) {
  const { data, icon, button } = props;
  const { features, price, name } = data;

  return (
    <Card
      boxShadow=" 0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05);"
      rounded={"2xl"}
      p="30px"
      gap="20px"
    >
      <VStack display={"flex"} alignItems={"flex-start"}>
        <Heading color={"#1F1F1F"} fontSize="14px" fontWeight="700">
          {name}
        </Heading>
      </VStack>
      <Flex align="flex-end" fontWeight="extrabold" mt="4" mb="10" font>
        <Heading
          fontSize="54px"
          color={"#333"}
          fontWeight="bold"
          lineHeight="1em"
        >
          {price}
        </Heading>
        <Text fontWeight="inherit" fontSize="14px" color="#666666">
          p/month
        </Text>
      </Flex>
      <List spacing="2" width={"100%"} mx="auto">
        {features.map((feature, index) => (
          <ListItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={2}
            fontWeight="semibold"
            fontSize="14px"
            my={5}
            key={index}
            color="#666666"
          >
            <ListIcon fontSize="sm" marginEnd={2}>
              <FaCheck />
            </ListIcon>
            {feature}
          </ListItem>
        ))}
      </List>
      {button}
    </Card>
  );
}

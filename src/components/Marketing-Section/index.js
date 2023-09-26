import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { PricingCard } from "./PricingCard";
import GetStarted from "../buttons/GetStarted";

const PricingCardStyles = {
  height: "395px",
  width: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const Market = () => (
  <Box display={"flex"} bg={"white"} as="section" p={"100px 40px 100px 40px"}>
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={{ base: "8", lg: "4" }}
      maxW={"1000px"}
      mx="auto"
      gap={"20px"}
      display={"flex"}
      alignItems="center"
    >
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: "8", lg: "4" }}
        maxW="5xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
        width={{ base: "300px", md: "100vw" }}
      >
        <PricingCard
          data={{
            price: "$5",
            name: "Personal",
            features: [
              "1 Feature",
              "Analytics",
              "Insights Panel",
              "Share Features",
            ],
          }}
          {...PricingCardStyles}
          button={
            <GetStarted
              fontSize="14px"
              bg="rgb(235, 235, 235)"
              color="#111111"
            />
          }
        />
        <PricingCard
          data={{
            price: "$10",
            name: "Professional",
            features: [
              "2 Features",
              "Analytics",
              "Insights Panel",
              "Share Features",
            ],
          }}
          {...PricingCardStyles}
          button={
            <GetStarted
              fontSize="14px"
              color="rgb(255, 212, 0)"
              bg="rgb(34, 34, 34)"
            />
          }
        />
        <PricingCard
          data={{
            price: "$50",
            name: "Business",
            features: [
              "Unlimited Features",
              "Analytics",
              "Insights Panel",
              "Share Features",
            ],
          }}
          {...PricingCardStyles}
          button={
            <GetStarted
              fontSize="14px"
              bg="rgb(235, 235, 235)"
              color="#111111"
            />
          }
        />
      </SimpleGrid>
    </SimpleGrid>
  </Box>
);
